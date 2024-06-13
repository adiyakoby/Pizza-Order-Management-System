import React from "react";
import { Table, Alert, Row, Spinner, Col, Card, Button } from "react-bootstrap";

function OrderDetails({ orderDetails, isLoading, isError }) {

    return (

        <Row className="mb-auto">
            {isError && <Alert variant="danger">Error fetching data.</Alert>}
            {isLoading ? (
                <div className="d-flex justify-content-center my-4">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row className="mb-auto">
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Customer Details</Card.Title>
                                <Card.Text>
                                    <strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}<br />
                                    <strong>Address:</strong> {orderDetails.address.street}, {orderDetails.address.houseNumber}, {orderDetails.address.city}<br />
                                    <strong>Phone Number:</strong> {orderDetails.number}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Pizza ID</th>
                                <th>Ingredients</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orderDetails.pizzas.map((pizza, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <ul>
                                            {pizza.ingredients.map((ingredient, i) => (
                                                <li key={i}>{ingredient.name} (${ingredient.price})</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>${pizza.ingredients.reduce((total, ingredient) => total + ingredient.price, 0)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}
        </Row>
    );

}

export default OrderDetails;
