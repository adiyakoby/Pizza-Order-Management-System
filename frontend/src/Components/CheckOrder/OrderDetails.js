/**
 * OrderDetails.js
 *
 * Component to display order details including customer information and order summary.
 * It calculates total prices for pizzas and handles loading and error states.
 */
import React from "react";
import { Alert, Row, Spinner, Col, Card } from "react-bootstrap";
import CustomerDetails from "./CustomerDetails";
import OrderTable from "./CheckOrderTable";

/**
 * OrderDetails Component
 *
 * Renders order details including customer information and order summary.
 * Calculates total prices for pizzas and manages loading and error states.
 *
 * @param {object} orderDetails - Details of the order including customer and pizza information.
 * @param {boolean} isLoading - Boolean indicating if data is loading.
 * @param {boolean} isError - Boolean indicating if an error occurred while fetching data.
 * @returns {JSX.Element} Rendered OrderDetails component.
 */
function OrderDetails({ orderDetails, isLoading, isError }) {

    /**
     * calculatePizzaPrice
     *
     * Calculates the total price of a pizza based on its ingredients.
     *
     * @param {object} pizza - Pizza object containing ingredients.
     * @returns {number} Calculated total price of the pizza.
     */
    const calculatePizzaPrice = (pizza) => {
        return pizza.ingredients.reduce((total, ingredient) => total + ingredient.price, 5);
    };

    /**
     * calculateTotalPrice
     *
     * Calculates the total price of all pizzas in the order.
     *
     * @param {array} pizzas - Array of pizza objects.
     * @returns {number} Total price of all pizzas in the order.
     */
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
