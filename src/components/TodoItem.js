import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import TodoContext from "../context/TodosContext";

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);

  const { deleteTodo, checkedTodos, showModal } = todoContext;

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
          onChange={() => checkedTodos(todo.id)}
        />
        <div
          style={{ overflowWrap: "anywhere", marginRight: "3px" }}
          className='ml-3'
        >
          {todo.todo}
        </div>
        <span style={{ marginLeft: "auto", display: "flex" }}>
          <Button variant='success' onClick={() => showModal(todo)}>
            <i className='fas fa-edit'></i>
          </Button>
          <Button
            className='ml-1'
            variant='danger'
            onClick={() => deleteTodo(todo.id)}
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

export default TodoItem;
