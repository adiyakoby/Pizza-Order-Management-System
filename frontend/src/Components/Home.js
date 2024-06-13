/**
 * Home.js
 *
 * This file defines the Home component, which serves as the landing page of the Pizza Order App.
 * It displays a welcome message and buttons to navigate to the "Start New Order" and "Check Order" pages.
 */
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Home Component
 *
 * This component renders the landing page of the Pizza Order App. It includes a welcome message
 * and buttons for navigating to the "Start New Order" and "Check Order" pages.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
    return (
        <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
            <Row className="mb-4">
                <Col>
                    <h1 className="display-4">Welcome to Pizza Order App</h1>
                </Col>
            </Row>
            <Row>
                <Col className="button-group mt-4">
                    <Button as={Link} to="/Order" variant="primary" size="lg" className="mx-2">
                        Start New Order
                    </Button>
                    <Button as={Link} to="/CheckOrder" variant="secondary" size="lg" className="mx-2">
                        Check Order
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
