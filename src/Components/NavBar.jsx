import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/logo.jpeg";
import { routes } from "../utils";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav" href="/">
              HOME
            </Nav.Link>
            <NavDropdown title="WINDOWS" id="basic-nav-dropdown">
              <div className="text-center h5">Options</div>
              <hr />
              {/* FIXME: SET HEADING STYLE */}
              <NavDropdown.Item href={routes.upvc}>uPVC</NavDropdown.Item>
              <NavDropdown.Item href={routes.timber}>Timber</NavDropdown.Item>
              <NavDropdown.Item href={routes.aluminium}>Aluminium</NavDropdown.Item>
              <NavDropdown.Divider />
              <div className="text-center h5">Styles</div>
              <hr />
              {/* FIXME: SET HEADING STYLE */}
              <NavDropdown.Item href="">Styles</NavDropdown.Item>
              <NavDropdown.Item href={routes.casement}>Casement</NavDropdown.Item>
              <NavDropdown.Item href={routes.sash}>Sash</NavDropdown.Item>
              <NavDropdown.Item href={routes.secondary}>Secondary</NavDropdown.Item>
              <NavDropdown.Item href={routes.tiltnturm}>Tilt & Turn</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={routes.doors}>DOORS</Nav.Link>
            <Nav.Link href={routes.conservatories}>CONSERVATORIES</Nav.Link>
            <Nav.Link href={routes.gallery}>GALLERY</Nav.Link>
            <Nav.Link href={routes.contactus}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
