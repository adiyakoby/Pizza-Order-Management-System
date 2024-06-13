/**
 * CustomerDetails.js
 *
 * This component renders customer details including name, address, and phone number in a Card format.
 * It utilizes the Card component from react-bootstrap for structured layout and styling.
 */
import React from "react";
import { Card } from "react-bootstrap";

/**
 * CustomerDetails Component
 *
 * Renders customer details including name, address, and phone number in a Card format.
 *
 * @param {object} orderDetails - Details of the customer's order containing firstName, lastName,
 *                               address (street, houseNumber, city), and number (phone number).
 * @returns {JSX.Element} Rendered Card displaying customer details.
 */
function CustomerDetails({ orderDetails }) {
    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <Card.Title className="h4">Customer Details</Card.Title>
                <Card.Text className="mb-2">
                    <strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}
                </Card.Text>
                <Card.Text className="mb-2">
                    <strong>Address:</strong> {orderDetails.address.street}, {orderDetails.address.houseNumber}, {orderDetails.address.city}
                </Card.Text>
                <Card.Text className="mb-0">
                    <strong>Phone Number:</strong> {orderDetails.number}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CustomerDetails;
