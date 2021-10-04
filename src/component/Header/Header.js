import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import img '../../images/logo_black.png'

const Header = () => {
    const style = {
        textDecoration: 'none',
        color: 'white',
        padding: '10px'
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container className='header'>
                <Navbar.Brand href="#home" className='text-warning'>Elearn</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/home" style={style}>Home</Link>
                    <Link to="/contact" style={style}>Contact</Link>
                    <Link to="/about" style={style}>About Us</Link>
                    <Link to="/courses" style={style}>Courses</Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;