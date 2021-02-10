import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

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
    <div style={todo.completed ? TodoComponentChecked : TodoComponent}>
      <div
        style={{
          border: "1px solid #DFDFDF",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          borderRadius: "2px",
        }}
      >
        <input
          type='checkbox'
          checked={todo.completed}
          name=''
          id=''
          onChange={() => onChange(todo)}
        />
        <div
          style={{ overflowWrap: "anywhere", marginRight: "3px" }}
          className='ml-3'
        >
          {todo.todo}
        </div>
        <span style={{ marginLeft: "auto", display: "flex" }}>
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
        </span>
      </div>
    </div>
  );
};

const TodoComponentChecked = {
  width: "100%",
  margin: "30px auto",
  backgroundColor: "#61CF93",
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
