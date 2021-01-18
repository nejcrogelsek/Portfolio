import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toast } from "react-toastify";
import db from "../../firebase";

function DeleteConfirmation({ id, onDelete, setOnDelete }) {
  const handleClose = () => {
    setOnDelete(false);
  };
  const deleteElement = (id) => {
    db.collection("hrana")
      .doc(id)
      .delete()
      .then(() => {
        toast.success("Izdelek uspešno izbrisan.");
      })
      .catch((error) => {
        alert(error);
      });
    setOnDelete(false);
  };
  return (
    <Dialog
      open={onDelete}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>{"Potrditev"}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Ali ste prepričani, da želite izbrisati izbran izdelek?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Prekliči
        </Button>
        <Button onClick={() => deleteElement(id)} color='secondary' autoFocus>
          Izbriši
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmation;
