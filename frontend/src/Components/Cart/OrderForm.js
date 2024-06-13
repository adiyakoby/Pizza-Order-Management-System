import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { CartContextProvider } from "../Context/CartContext";

function OrderForm() {
    const { cart } = useContext(CartContextProvider);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        houseNumber: "",
        city: "",
        number: ""
    });

    const [validated, setValidated] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function registerOrder() {
        const orderData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: {
                street: formData.street,
                houseNumber: formData.houseNumber,
                city: formData.city
            },
            number: formData.number,
            pizzas: cart.map(pizza => ({ ingredients: pizza }))
        };

        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setOrderId(result.id);
            setOrderPlaced(true);
            console.log("Order placed:", result.id);
        } catch (error) {
            setError("There was an error placing your order. Please try again.");
            console.error("There was an error:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            if (!/^\d{10}$/.test(formData.number)) {
                setError("Please enter a 10-digit phone number.");
                setValidated(true);
                return;
            }
            setIsSubmitting(true);
            registerOrder();

        }
        setValidated(true);
    };

    if (cart.length === 0) {
        return <Alert variant="warning">Your cart is empty. Please add some pizzas to your cart.</Alert>;
    }

    return (
        <Container>
            {orderPlaced ? (
                <Alert variant="success">
                    Your order has been placed successfully! Your order ID is: <strong>{orderId}</strong>
                </Alert>
            ) : (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                minLength={1}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a first name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                minLength={1}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="8" controlId="validationStreet">
                            <Form.Label>Street</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="street"
                                value={formData.street}
                                onChange={handleInputChange}
                                minLength={1}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a street address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationHouseNumber">
                            <Form.Label>House Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="houseNumber"
                                value={formData.houseNumber}
                                onChange={handleInputChange}
                                minLength={1}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a house number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                minLength={1}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="validationPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="number"
                                value={formData.number}
                                onChange={handleInputChange}
                                minLength={10}
                                maxLength={10}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit" disabled={isSubmitting}>
                        Place Order
                    </Button>
                </Form>
            )}
        </Container>
    );
}

export default OrderForm;
