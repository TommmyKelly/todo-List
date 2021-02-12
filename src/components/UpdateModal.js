import React, { useEffect, useRef, useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import TodoContext from "../context/TodosContext";

const UpdateModal = () => {
  const todoContext = useContext(TodoContext);

  const { modal, hideModal, modalText, upDateTodo, ModalID } = todoContext;

  const Inputref = useRef(null);

  const [newText, setnewText] = useState("");

  const onChange = () => {
    setnewText(Inputref.current.value);
  };

  useEffect(() => {
    if (modal) {
      Inputref.current.value = modalText;
      setnewText(modalText);
    }
    // eslint-disable-next-line
  }, [modal]);

  return (
    <Modal show={modal} onHide={() => hideModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          ref={Inputref}
          type='text'
          style={{ width: "100%" }}
          onChange={onChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => hideModal()}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() =>
            upDateTodo({
              text: newText,
              id: ModalID,
            })
          }
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
