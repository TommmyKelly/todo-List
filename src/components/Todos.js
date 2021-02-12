import React, { useEffect, useContext } from "react";
import TodosContext from "../context/TodosContext";
import FlipMove from "react-flip-move";

import TodoItem from "./TodoItem";

const Todos = () => {
  const todosContext = useContext(TodosContext);

  const { todos, getTodos } = todosContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <FlipMove>
        {todos.map((todo) => (
          <div style={{ width: "100%" }} key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

export default Todos;
