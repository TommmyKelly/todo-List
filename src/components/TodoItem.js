import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const TodoItem = ({ todo, setTodos, setShow, setTodoId, setTodoEditText }) => {
  //DELETE TODO
  const deleteTodo = (todoToDelete) => {
    setTodos((prevState) =>
      prevState.filter((td) => td.id !== todoToDelete.id)
    );
  };

  //UPDATE CHECKED TODO
  const onChange = (CheckedTodo) => {
    setTodos((prevState) =>
      prevState.map((td) =>
        td.id === CheckedTodo.id
          ? {
              id: CheckedTodo.id,
              todo: CheckedTodo.todo,
              completed: !td.completed,
            }
          : td
      )
    );
  };

  //GET EDIT TODO IF AND SHOW MODAL

  const onClick = (item) => {
    setTodoId(item.id);
    setTodoEditText(item.todo);
    setShow(true);
  };

  return (
    <Card
      className={"my-1 rounded "}
      style={todo.completed ? TodoComponentChecked : TodoComponent}
    >
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <input
          type='checkbox'
          checked={todo.completed}
          name=''
          id=''
          onChange={() => onChange(todo)}
        />
        <span className='ml-3' style={{ flexGrow: 1 }}>
          {todo.todo}
        </span>
        <Button variant='success' onClick={() => onClick(todo)}>
          <i className='fas fa-edit'></i>
        </Button>
        <Button
          className='ml-1'
          variant='danger'
          onClick={() => deleteTodo(todo)}
        >
          <i className='fas fa-trash-alt'></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

const TodoComponentChecked = {
  width: "100%",
  margin: "30px auto",
  backgroundColor: "green",
};

const TodoComponent = {
  width: "100%",
  margin: "30px auto",
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoItem;
