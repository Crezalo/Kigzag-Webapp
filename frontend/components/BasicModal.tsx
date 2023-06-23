import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { clickEvent } from "../services/analytics";

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
    // boxShadow: theme.shadows[5],
    color: "white",
    // padding: theme.spacing(2, 4, 3),
  },
}));

interface BasicModalProps {
  modalButtonText: any;
  modalBody: any;
  onClickFunction?: any;
  formatting?: any;
}
const BasicModal = ({
  modalButtonText,
  modalBody,
  onClickFunction,
  formatting,
}: BasicModalProps) => {
  const classesModal = useStylesModal();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="modelButton">
        {!formatting ? (
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={() => {
              handleOpen();
              clickEvent("BasicModal_" + modalButtonText.replace(/\s+/g, ""));
              if (onClickFunction) onClickFunction();
            }}
          >
            {modalButtonText}
          </Button>
        ) : (
          <div
            onClick={() => {
              handleOpen();
              if (onClickFunction) onClickFunction();
            }}
          >
            {modalButtonText}
          </div>
        )}
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
