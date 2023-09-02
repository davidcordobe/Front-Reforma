import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.png';

require('../css/navbar.css');

const CustomNavbar = () => {
    // Agrega un estado para controlar si el menú está abierto o cerrado en dispositivos más pequeños
    const [expanded, setExpanded] = useState(false);

    // Función para cerrar el menú cuando se hace clic en un enlace
    const closeMenu = () => {
        setExpanded(false);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} className="w-100">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Reforma" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(!expanded)} // Cambia el estado al hacer clic en el botón
                />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={NavLink}
                            exact
                            to="/"
                            activeClassName="active"
                            className="custom-link"
                            onClick={closeMenu} // Cierra el menú cuando se hace clic en el enlace
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/quienSomos"
                            activeClassName="active"
                            className="custom-link"
                            onClick={closeMenu} // Cierra el menú cuando se hace clic en el enlace
                        >
                            Sobre Nosotros
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/productos"
                            activeClassName="active"
                            className="custom-link"
                            onClick={closeMenu} // Cierra el menú cuando se hace clic en el enlace
                        >
                            Productos
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/servicios"
                            activeClassName="active"
                            className="custom-link"
                            onClick={closeMenu} // Cierra el menú cuando se hace clic en el enlace
                        >
                            Servicios
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/formulario"
                            activeClassName="active"
                            className="custom-link"
                            onClick={closeMenu} // Cierra el menú cuando se hace clic en el enlace
                        >
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
