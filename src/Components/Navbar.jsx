import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container >
        <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: '#194dcfd6' }}>
          Incubyte
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link href="#about" style={{color: '#194dcfd6' }}>About Us</Nav.Link>
            <Nav.Link href="#experience" style={{color: '#194dcfd6' }}>Our Experience</Nav.Link>
            <Nav.Link href="#success" style={{color: '#194dcfd6' }}>Success Stories</Nav.Link>
            <Nav.Link href="#contact" style={{color: '#194dcfd6' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;