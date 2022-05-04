import React, {useState}from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button }from "react-bootstrap";

import NavLinks from './Nav-links';


const NavBarMenu = () => {
  const options = [
    {
      name: <FontAwesomeIcon icon="fa-solid fa-ellipsis" />,
      scroll: true,
      backdrop: true,
    }
  ];
  
  function ClickMenu({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <div>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Our Services</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className='onClick-menu-list'>
              <li><a>Concrete</a> </li>
              <li> <a>Shortcrete</a></li>
              <li> <a>Demolition</a></li>
            </ul>
            <div className='onClick-menu-list-nav-links'>
              <div className='links'>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
              </div>
            </div>
            <div className='onClick-menu-logo'>
              <h2>GPR</h2>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
  
  function Menu() {
    return (
      <div>
        {options.map((props, idx) => (
          <ClickMenu key={idx} {...props} />
        ))}
      </div>
    );
  }
  
  return (
    <div>
      <Menu />
    </div>
    );
      
      
      
      
      
      {/* <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand className="nav-bar-brand"> <NavLinks/> </Navbar.Brand>
          <NavLinks/>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}


}

export default NavBarMenu;