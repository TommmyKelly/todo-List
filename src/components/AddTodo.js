import React, { useState, useRef, useContext } from "react";
import { Button, Card, Toast } from "react-bootstrap";
import TodosContext from "../context/TodosContext";

const AddTodo = () => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(false);

  const todosContext = useContext(TodosContext);

  const { addTodo, filterTodos, unfilter } = todosContext;

  const [input, setInput] = useState("");

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

    addTodo(newTodo);
    Inputref.current.value = "";
  };

  const filterCurrent = () => {
    if (Inputref.current.value === "") {
      setShow(true);
      return;
    }
    setFilter(true);
    filterTodos(Inputref.current.value);
  };

  const unfilterCurrent = () => {
    setFilter(false);
    unfilter();
    Inputref.current.value = "";
  };

  return (
    <div>
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
            placeholder='Add Todo...'
          />

          <Button className='ml-1' variant='primary' onClick={AddNewTodo}>
            <i className='fas fa-plus-square'></i>
          </Button>
          {filter ? (
            <Button className='ml-1' variant='danger' onClick={unfilterCurrent}>
              <i class='fa fa-times' aria-hidden='true'></i>
            </Button>
          ) : (
            <Button className='ml-1' variant='dark' onClick={filterCurrent}>
              <i className='fa fa-search' aria-hidden='true'></i>
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddTodo;
