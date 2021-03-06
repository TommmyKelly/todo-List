import React from "react";
import Todos from "./components/Todos";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import UpdateModal from "./components/UpdateModal";
import TodosState from "./context/TodosState";

function App() {
  return (
    <>
      <TodosState>
        <Header />
        <Container>
          <AddTodo />
          <Todos />
          <UpdateModal />
        </Container>
      </TodosState>
    </>
  );
}

export default App;
