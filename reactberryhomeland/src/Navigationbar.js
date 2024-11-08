import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigationbar() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#/home">
            {" "}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              width="100%"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/home">Home</Nav.Link>
              <Nav.Link href="#/about">About</Nav.Link>
              <Nav.Link href="#/about">Abaca Fiber Market</Nav.Link>
              <Nav.Link href="#/about">Gallery</Nav.Link>
              <Nav.Link href="#/about">Privacy Policy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
