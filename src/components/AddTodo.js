import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Card, Toast } from "react-bootstrap";

const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const Inputref = useRef(null);
  const onInput = (e) => {
    setInput(e.target.value);
  };

  const AddNewTodo = () => {
    if (Inputref.current.value === "") {
      setShow(true);
      return;
    }
    const newTodo = {
      id: Date.now(),
      todo: input,
      completed: false,
    };
    setTodos((prevState) => [newTodo, ...prevState]);

    Inputref.current.value = "";
  };

  return (
    <>
      <Toast
        style={{ backgroundColor: "pink" }}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          {/* <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' /> */}
          <strong className='mr-auto'>Todo List</strong>
          <small>Input missing</small>
        </Toast.Header>
        <Toast.Body>Whoops, input is blank!</Toast.Body>
      </Toast>
      <Card className={"my-1 rounded "} style={{ width: "100%" }}>
        <Card.Body className='d-flex justify-content-center align-items-center'>
          <input
            type='text'
            style={{ width: "100%", marginRight: "4px" }}
            onInput={(e) => onInput(e)}
            ref={Inputref}
            placeholder='Add Tood...'
          />

          <Button className='ml-1' variant='primary' onClick={AddNewTodo}>
            <i className='fas fa-plus-square'></i>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

AddTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default AddTodo;
