import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@mui/material/Modal';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    backgroundColor: "#3b82f6",
    padding: theme.spacing(2, 4, 3),
  },
}));

interface BasicModalProps {
  modalButtonText: string;
  modalBody: any;
}
const BasicModal = ({ modalButtonText, modalBody }: BasicModalProps) => {
  const classesModal = useStylesModal();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="modelButton">
        <Button
          style={{ background: "#3B82F6", color: "white", marginBottom: "2px"}}
          variant="contained"
          onClick={handleOpen}
        >
          {modalButtonText}
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classesModal.paper}>{modalBody}</div>
        </Fade>
      </Modal>
    </>
  );
};
export default BasicModal;
