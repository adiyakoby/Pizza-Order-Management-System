import {Card} from "react-bootstrap";
import React from "react";


function CustomerDetails({orderDetails}) {
    return (
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
    );
}

export default CustomerDetails;