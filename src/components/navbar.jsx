import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.png';

require('../css/navbar.css');

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Reforma" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} exact to="/" activeClassName="active" className="custom-link">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/productos" activeClassName="active" className="custom-link">
                            Productos
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/servicios" activeClassName="active" className="custom-link">
                            Servicios
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/formulario" activeClassName="active" className="custom-link">
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
