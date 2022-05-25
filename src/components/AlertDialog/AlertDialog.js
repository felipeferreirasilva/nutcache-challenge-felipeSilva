import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = ({
  showDialog,
  dialogTitle,
  dialogText,
  onClose,
  onConfirm,
  onConfirmLabel,
}) => {
  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="text"
            color="error"
            onClick={() => onConfirm()}
            autoFocus
          >
            {onConfirmLabel}
          </Button>
          <Button onClick={() => onClose(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  showDialog: PropTypes.bool,
  dialogTitle: PropTypes.string,
  dialogText: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  onConfirmLabel: PropTypes.string,
};

export default AlertDialog;
