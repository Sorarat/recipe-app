import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg" >
        <Container>
          <Navbar.Brand href="#home">RecipeLookUp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/categories">
                Categories
              </Nav.Link>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/my-profile">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/favorites">
                  Favorites
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/log-out">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
