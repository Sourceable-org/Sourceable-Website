import React from 'react'
import {Container,Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container className='navstyle'>
                    <Navbar.Brand as={Link} to="/">Sourceable</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="navOnHover">Home</Nav.Link>
                            <Nav.Link as={Link} to="/explore" className="navOnHover">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="navOnHover">About</Nav.Link>
                        </Nav>
                        <Nav.Link as={Link} to="/contact" className='navOnHover'>Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/join" className='navOnHover' >Join Us</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
    )
}

export default Header
