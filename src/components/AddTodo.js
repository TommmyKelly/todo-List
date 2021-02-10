import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const Inputref = useRef(null);
  const onInput = (e) => {
    setInput(e.target.value);
  };

  const AddNewTodo = () => {
    const newTodo = {
      id: Date.now(),
      todo: input,
      completed: false,
    };
    setTodos((prevState) => [newTodo, ...prevState]);

    Inputref.current.value = "";
  };

  return (
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
  );
};

AddTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default AddTodo;
