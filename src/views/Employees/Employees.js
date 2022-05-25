import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Axios from "axios";
import { API } from "../../api";
import EmployeeModal from "./Modal/EmployeeModal/EmployeeModal";
import { Table, SubHeader } from "../../components";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllEmployess = () => {
    setIsLoading(true);
    Axios.get(API).then(({ data }) => {
      setEmployees(data);
      setEmployee(null);
      setIsLoading(false);
    });
  };

  const onRowClick = (e) => {
    setEmployee(e?.row);
    setShowModal(true);
  };

  useEffect(() => {
    getAllEmployess();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 350 },
    { field: "email", headerName: "Email", width: 350 },
    { field: "startDate", headerName: "Start Date", width: 200 },
    { field: "team", headerName: "Team", width: 200 },
  ];

  const actionButtons = [
    {
      startIcon: <AddIcon />,
      title: "Employee",
      onClick: () => setShowModal(true),
    },
  ];

  return (
    <>
      <Box height={500}>
        <SubHeader title="Employees" actionButtons={actionButtons} />

        <Table
          rows={employees.map((employe) => ({
            id: employe?._id,
            name: employe?.name,
            email: employe?.email,
            startDate:
              employe?.startDate &&
              new Date(employe.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
              }),
            team: employe?.team,
          }))}
          columns={columns}
          onRowClick={onRowClick}
          loading={isLoading}
        ></Table>
      </Box>

      <EmployeeModal
        showModal={showModal}
        setShowModal={setShowModal}
        onSubmitCallBack={getAllEmployess}
        selectedEmployee={employee}
      />
    </>
  );
};

export default Employees;
