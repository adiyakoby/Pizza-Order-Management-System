import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function CheckForm({ handleSubmit, orderId, setOrderId }) {
    return (
        <Container className="my-4 p-4 border rounded bg-light shadow-sm">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formOrderID">
                            <Form.Label className="h5">Search for Order</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter order ID"
                                onChange={(e) => setOrderId(e.target.value.trim())}
                                value={orderId}
                                className="mb-2"
                            />
                            <Form.Text className="text-muted">
                                There is no option to edit the order after submitting.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={orderId === ""} className="w-100">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckForm;
