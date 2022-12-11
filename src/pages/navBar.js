import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navbars() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </Container>
      </Navbar>
    </>
  );
}
