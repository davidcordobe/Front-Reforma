import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Importa la imagen del logo

require('../css/navbar.css')

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Reforma" className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/productos">
                            Productos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/formulario">
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
