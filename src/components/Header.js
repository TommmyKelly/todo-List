import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className='mb-3' bg='dark' variant='dark'>
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
      </Navbar>
    </>
  );
};

export default Header;
