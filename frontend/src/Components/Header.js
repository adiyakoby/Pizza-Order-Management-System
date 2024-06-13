/**
 * Header.js
 *
 * This file defines the Header component for the Pizza Order App.
 * It includes a navigation bar with a logo, links to the Home page and Cart, and a responsive menu toggle.
 * The component also renders nested routes using the React Router Outlet.
 */
import React from 'react';
import { Outlet } from "react-router";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Header.css";

/**
 * Header Component
 *
 * This component represents the header navigation bar of the Pizza Order App.
 * It contains a logo, links to navigate to the Home page and Cart, and a responsive menu toggle for smaller screens.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
function Header() {
    return (
        <Container>
            <Navbar expand="lg" className="bg-transparent custom-navbar">
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
                            <Nav.Link as={Link} to="/" className="custom-link" >
                                <strong >Home</strong> {/* Adding strong tag for emphasis */}
                            </Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/Cart" className="custom-link">
                                <img
                                    src="/shopping-cart.png"
                                    width="50"
                                    height="50"
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
