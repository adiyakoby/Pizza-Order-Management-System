/**
 * CheckForm Component.js
 *
 * Renders a form for searching orders by ID.
 */

import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

/**
 * CheckForm Component
 *
 * Renders a form for searching orders by ID.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.handleSubmit - Function to handle form submission.
 * @param {string} props.orderId - Current value of the order ID input field.
 * @param {Function} props.setOrderId - Function to update the order ID state.
 * @returns {JSX.Element} Rendered CheckForm component.
 */
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
