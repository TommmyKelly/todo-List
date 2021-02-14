import React, { useState, useRef, useContext } from "react";
import { Button, Card, Toast } from "react-bootstrap";
import TodosContext from "../context/TodosContext";

const AddTodo = () => {
  const todosContext = useContext(TodosContext);

  const { addTodo, filterTodos, unfilter } = todosContext;

  //useState
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [clearButton, setClearButton] = useState(false);

  //input Ref
  const Inputref = useRef(null);

  //When user is inputing in to the input box
  const onInput = (e) => {
    setInput(e.target.value);
    filterTodos(Inputref.current.value);
    if (Inputref.current.value === "") {
      setClearButton(false);
      unfilterCurrent();
    } else {
      setClearButton(true);
    }
  };

  //Add new todo
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
    setClearButton(false);
  };

  //Clear filter
  const unfilterCurrent = () => {
    unfilter();
    setShow(false);
    Inputref.current.value = "";
    setClearButton(false);
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
          <strong className='mr-auto'>Todo List</strong>
          <small>Input missing</small>
        </Toast.Header>
        <Toast.Body>Whoops, input is blank!</Toast.Body>
      </Toast>
      <Card className={"my-1 rounded "} style={{ width: "100%" }}>
        <Card.Body className='d-flex justify-content-center align-items-center'>
          <div
            className='d-flex justify-content-center align-items-center'
            style={{
              width: "100%",
              border: "1px solid #DFDFDF",
              borderRadius: "23px",
              padding: "8px",
            }}
          >
            <input
              className='search__input'
              type='text'
              style={{
                width: "100%",
                marginRight: "4px",
                border: "none",
              }}
              onInput={(e) => onInput(e)}
              ref={Inputref}
              placeholder='Add Todo... / Search Todos...'
              onFocus={() => {
                setClearButton(true);
              }}
              onBlur={() => {
                if (Inputref.current.value === "") {
                  setClearButton(false);
                }
              }}
            />
            {clearButton && (
              // eslint-disable-next-line
              <i
                style={{
                  backgroundColor: "#B3B3B3",
                  borderRadius: "50%",
                  textDecoration: "none",
                  color: "white",
                  padding: "4px",
                  fontSize: "10px",
                }}
                className='fa fa-times clear__button'
                onClick={unfilterCurrent}
              ></i>
            )}
          </div>

          <Button className='ml-1' variant='primary' onClick={AddNewTodo}>
            <i className='fas fa-plus-square'></i>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddTodo;
