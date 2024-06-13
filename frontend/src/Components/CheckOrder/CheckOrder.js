/**
 * CheckOrder.js
 *
 * This component manages the process of checking an order by ID.
 * It includes a form for inputting the order ID and displays order details or error messages accordingly.
 */
import React, {useEffect, useState} from "react";
import {Alert, Container} from "react-bootstrap";
import CheckForm from "./CheckForm";
import OrderDetails from "./OrderDetails";
import useDataApi from "../CustomUseEffect/UseDataApi"; // Import your custom hook

/**
 * CheckOrder Component
 *
 * Manages the process of checking an order by ID. Displays a form for inputting the order ID
 * and renders either the order details or an error message based on the retrieved data.
 *
 * @returns {JSX.Element} Rendered CheckOrder component.
 */
function CheckOrder() {
    const [orderId, setOrderId] = useState("");
    const [{ data: orderDetails, isLoading, isError }, setUrl] = useDataApi(null, null);
    const [error, setError] = useState("");

    /**
     * Handles form submission to fetch order details based on the entered order ID.
     * @param {Event} event - Form submission event.
     */
    const handleSubmit = async (event) =>  {
        event.preventDefault();
        await setUrl(`/api/${orderId}`);

    };

    /**
     * Checks for errors when order details are retrieved or loading states change.
     * Updates the error state accordingly.
     */
    useEffect(() => {
        if(!orderDetails && orderId !== "" && !isLoading) {
            setError("There is no such order id.");
        } else {
            setError("");
        }
    }, [orderDetails, isError]);

    return (
        <div className="check-order-page">
            <video autoPlay muted loop className="background-video">
                <source src="/PizzaClip.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-container">
                <Container>
                    <CheckForm handleSubmit={handleSubmit} orderId={orderId} setOrderId={setOrderId} />
                    {!orderDetails && error !== "" && <Alert variant="danger">No such order id.</Alert>}
                    {orderDetails && <OrderDetails orderDetails={orderDetails} isError={isError} isLoading={isLoading} />}
                </Container>
            </div>
        </div>
    );
}

export default CheckOrder;
