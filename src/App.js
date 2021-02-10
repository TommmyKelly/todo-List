import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "test",
      completed: false,
    },
    { id: 2, todo: "test 2", completed: false },
    { id: 3, todo: "test 3", completed: false },
  ]);

  return (
    <>
      <Header />
      <Container>
        <AddTodo setTodos={setTodos} />
        {todos.map((todo) => (
          <Row className={"mx-auto"}>
            <TodoItem
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
            />
          </Row>
        ))}
      </Container>
    </>
  );
}

export default App;
