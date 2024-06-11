import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


function Home() {




    return (
        <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
            <Row>
                <Col>
                    <h1>Welcome to Pizza Order App</h1>
                </Col>
            </Row>
            <Row>
                <Col className="button-group mt-4">
                        <Link to="/Order" className="btn btn-primary mx-2">
                            Start new Order
                        </Link>
                        <Link to="/Check" className="btn btn-secondary mx-2">
                            Check Order
                        </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;