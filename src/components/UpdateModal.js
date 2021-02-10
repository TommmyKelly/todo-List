import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

const UpdateModal = ({
  show,
  handleClose,
  setModalInput,
  updateModal,
  TodoEditText,
}) => {
  const Inputref = useRef(null);

  useEffect(() => {
    if (show) {
      Inputref.current.value = TodoEditText;
      Inputref.current.focus();
    }
    // eslint-disable-next-line
  }, [show]);

  const onChange = (e) => {
    setModalInput(e.target.value);
  };

  const onClick = () => {
    updateModal();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          ref={Inputref}
          type='text'
          style={{ width: "100%" }}
          onChange={(e) => onChange(e)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={onClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

UpdateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default UpdateModal;
