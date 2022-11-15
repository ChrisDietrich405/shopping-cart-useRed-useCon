import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height: "80px"}}>
        <Container>
            <Navbar.Brand>
                <a href="/">Shopping Cart</a>
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header