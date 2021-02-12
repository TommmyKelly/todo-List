import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import TodosContext from "../context/TodosContext";

const Header = () => {
  const todoContext = useContext(TodosContext);

  return (
    <>
      <Navbar className='mb-3' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{" "}
            Todo List
          </Navbar.Brand>
          <Navbar.Text>
            <strong>{todoContext.todos.length} Todos</strong>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
