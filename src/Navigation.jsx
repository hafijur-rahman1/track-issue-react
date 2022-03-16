import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" className="d-flex  mb-3 ">
      <Container className="me-auto  ">
        <Navbar.Brand className="issue-brand" href="#home">
          Issue Manager
        </Navbar.Brand>
        <Nav className=" ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
