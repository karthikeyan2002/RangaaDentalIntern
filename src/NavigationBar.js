import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 1%;
    right: 70%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
    <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Admin Panel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">Doctor Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Patient Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">Medical Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
