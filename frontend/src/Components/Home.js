import {Button, Col, Container, Row} from "react-bootstrap";


function Home() {
    return (
        <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
            <Row>
                <Col>
                    <h1>Welcome to Pizza Order App</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="button-group mt-4">
                        <Button variant="primary" className="home-button mx-2">
                            Start new Order
                        </Button>
                        <Button variant="secondary" className="home-button mx-2">
                            Check order
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;