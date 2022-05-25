import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import Axios from "axios";
import { API } from "../../../../api";
import {
  TextInput,
  DatePicker,
  SelectBox,
  AlertDialog,
} from "../../../../components";
import "./style.css";

const EmployeeModal = ({
  showModal,
  setShowModal,
  onSubmitCallBack,
  selectedEmployee = null,
}) => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [team, setTeam] = useState("");
  const [employee, setEmployee] = useState(selectedEmployee);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const clearForm = () => {
    setName("");
    setBirthDate(new Date());
    setGender("");
    setEmail("");
    setCpf("");
    setStartDate(new Date());
    setTeam("");
  };

  const onCloseModal = () => {
    clearForm();
    setEmployee(false);
    setShowModal(false);
  };

  const onUpdateEmployee = () => {
    Axios.put(`${API}/${selectedEmployee?.id}`, {
      name,
      birthDate,
      gender,
      email,
      cpf,
      startDate,
      team,
    })
      .then(() => {
        onSubmitCallBack();
        onCloseModal();
      })
      .catch((error) => console.log(error));
  };

  const onDeleteEmployee = () => {
    Axios.delete(`${API}/${selectedEmployee?.id}`)
      .then(() => {
        onSubmitCallBack();
        setShowDeleteDialog(false);
        onCloseModal();
      })
      .catch((error) => console.log(error));
  };

  const onClickDeleteEmployee = () => {
    setShowDeleteDialog(true);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    Axios.post(API, {
      name,
      birthDate,
      gender,
      email,
      cpf,
      startDate,
      team,
    })
      .then(() => {
        onSubmitCallBack();
        onCloseModal();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
      Axios.get(`${API}/${selectedEmployee?.id}`)
        .then(({ data }) => {
          if (data) {
            setName(data?.name);
            setBirthDate(data?.birthDate);
            setGender(data?.gender);
            setEmail(data?.email);
            setCpf(data?.cpf);
            setStartDate(data?.startDate);
            setTeam(data?.team);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [selectedEmployee]);

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => onCloseModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="employee-modal">
          <Typography id="modal-modal-title" variant="h5" mb={2.5}>
            {employee ? "Edit" : "Add new"} employee
          </Typography>

          <form onSubmit={(e) => onSubmitForm(e)}>
            <Stack spacing={2.5}>
              <TextInput label="Name" value={name} onChange={setName} />

              <SelectBox
                id="gender"
                label="Gender"
                value={gender}
                onChange={setGender}
                items={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                ]}
              ></SelectBox>

              <DatePicker
                label="Birth Date"
                value={birthDate}
                onChange={setBirthDate}
              />

              <TextInput
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
              />

              <TextInput label="Cpf" value={cpf} onChange={setCpf} />

              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={setStartDate}
                inputFormat="MM/yyyy"
              />

              <SelectBox
                id="team"
                label="Team"
                value={team}
                onChange={setTeam}
                items={[
                  { value: "", label: "" },
                  { value: "Mobile", label: "Mobile" },
                  { value: "Frontend", label: "Frontend" },
                  { value: "Backend", label: "Backend" },
                ]}
              ></SelectBox>

              {!employee ? (
                <Box>
                  <Button
                    type="submit"
                    startIcon={<SaveIcon />}
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              ) : (
                <Box display="flex" gap="10px">
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={() => onUpdateEmployee()}
                  >
                    Update
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => onClickDeleteEmployee()}
                  >
                    Delete
                  </Button>
                </Box>
              )}
            </Stack>
          </form>
        </Box>
      </Modal>
      <AlertDialog
        showDialog={showDeleteDialog}
        dialogTitle="Are you sure you want to delete the employee?"
        dialogText="The employee will be deleted forever."
        onConfirmLabel="Delete"
        onConfirm={onDeleteEmployee}
        onClose={setShowDeleteDialog}
      ></AlertDialog>
    </>
  );
};

EmployeeModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  onSubmitCallBack: PropTypes.func,
  selectedEmployee: PropTypes.object,
};

export default EmployeeModal;
