import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <video autoPlay muted loop className="background-video">
                <source src="/PizzaClip.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <Container fluid className="content-container">
                <Row className="mb-4">
                    <Col>
                        <h1 className="display-4 fw-bold">Welcome to Pizza Order App</h1>
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
        </div>
    );
}

export default Home;
