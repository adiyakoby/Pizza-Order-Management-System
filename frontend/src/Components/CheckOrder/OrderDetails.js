import React from "react";
import { Table, Alert, Row, Spinner, Col, Card } from "react-bootstrap";
import CustomerDetails from "./CustomerDetails";
import OrderTable from "./OrderTable";

function OrderDetails({ orderDetails, isLoading, isError }) {
    const calculatePizzaPrice = (pizza) => {
        return pizza.ingredients.reduce((total, ingredient) => total + ingredient.price, 5);
    };

    const calculateTotalPrice = (pizzas) => {
        return pizzas.reduce((total, pizza) => total + calculatePizzaPrice(pizza), 0);
    };

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
                <>
                    <Row className="mb-auto">
                        <Col md={6}>
                            <CustomerDetails orderDetails={orderDetails} />
                        </Col>
                        <Col md={6}>
                            <OrderTable orderDetails={orderDetails} calculatePizzaPrice={calculatePizzaPrice} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="offset-md-6">
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <strong>Total Price:</strong> ${calculateTotalPrice(orderDetails.pizzas)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </Row>
    );
}

export default OrderDetails;
