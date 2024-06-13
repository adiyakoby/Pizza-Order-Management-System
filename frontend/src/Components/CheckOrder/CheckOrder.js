import React, {useEffect, useState} from "react";
import {Alert, Container} from "react-bootstrap";
import CheckForm from "./CheckForm";
import OrderDetails from "./OrderDetails";
import useDataApi from "../CustomUseEffect/UseDataApi"; // Import your custom hook

function CheckOrder() {
    const [orderId, setOrderId] = useState("");
    const [{ data: orderDetails, isLoading, isError }, setUrl] = useDataApi(null, null);
    const [error, setError] = useState("");

    const handleSubmit = async (event) =>  {
        event.preventDefault();
        await setUrl(`/api/${orderId}`);

    };

    useEffect(() => {
        console.log(orderDetails , orderId);
        if(!orderDetails && orderId !== "" && !isLoading) {
            setError("There is no such order id.");
        } else {
            setError("");
        }
    }, [orderDetails, isError]);

    return (
        <Container>
            <CheckForm handleSubmit={handleSubmit} orderId={orderId} setOrderId={setOrderId} />
            {!orderDetails && error !== "" && (<Alert variant="danger">No such order id.</Alert>)}
            {orderDetails && <OrderDetails orderDetails={orderDetails} isError={isError} isLoading={isLoading} />}
        </Container>
    );
}

export default CheckOrder;
