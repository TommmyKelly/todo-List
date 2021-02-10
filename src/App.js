import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import UpdateModal from "./components/UpdateModal";
import FlipMove from "react-flip-move";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   todo: "test",
    //   completed: false,
    // },
    // { id: 2, todo: "test 2", completed: false },
    // { id: 3, todo: "test 3", completed: false },
  ]);

  //GET FROM LOCAL STORAGE

  useEffect(() => {
    if (localStorage.hasOwnProperty("todos")) {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
    }
  }, []);

  //ADD TODOS TO LOCAL STORAE

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //UPDATE TODO

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalInput, setModalInput] = useState("");
  const [TodoId, setTodoId] = useState(null);
  const [TodoEditText, setTodoEditText] = useState("");

  const updateModal = () => {
    setTodos((prevState) =>
      prevState.map((td) =>
        td.id === TodoId
          ? {
              id: td.id,
              todo: modalInput,
              completed: td.completed,
            }
          : td
      )
    );
    setShow(false);
  };

  return (
    <>
      <Header todos={todos} />
      <Container>
        <UpdateModal
          show={show}
          handleClose={handleClose}
          setModalInput={setModalInput}
          updateModal={updateModal}
          TodoEditText={TodoEditText}
        />
        <AddTodo setTodos={setTodos} />
        <FlipMove>
          {todos.map((todo) => (
            <Row key={todo.id} className={"mx-auto"}>
              <TodoItem
                todo={todo}
                setTodos={setTodos}
                todos={todos}
                handleShow={handleShow}
                setShow={setShow}
                setTodoId={setTodoId}
                setTodoEditText={setTodoEditText}
              />
            </Row>
          ))}
        </FlipMove>
      </Container>
    </>
  );
}

export default App;
