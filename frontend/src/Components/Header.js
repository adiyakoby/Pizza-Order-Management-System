import React from 'react';
import { Outlet } from "react-router";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="/Adis-logo.jpeg"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/Cart">
                                <img
                                    src="/shopping-cart.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="cart"
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </Container>

    );
}

export default Header;
