import {Alert, Button, Container} from "react-bootstrap";
import CartTable from "./CartTable";
import React, {useContext, useEffect, useState} from "react";
import OrderForm from "./OrderForm";
import {CartContextProvider} from "../Context/CartContext";

/**
 * Cart Component
 *
 * Renders a container displaying the cart table, allowing users to view their
 * selected pizzas with options to order or show an alert if the cart is empty.
 *
 * @returns {JSX.Element} Rendered Cart component.
 */
function Cart() {
    const { cart } = useContext(CartContextProvider);
    const [ordering, setOrdering] = useState(false)

    useEffect(() => {
        if (cart.length === 0 ) {
            setOrdering(false);
        }
    }, [ordering]);

    return (
        <Container
            fluid
            className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light"
        >
            <CartTable/>
            {cart.length === 0 && !ordering &&
                <Alert variant="warning">Your cart is empty. Please add some pizzas to your cart.</Alert>
            }
            {ordering ?
                <OrderForm/> : <Button onClick={() => setOrdering(true)} disabled={cart.length === 0}> Order Now</Button>
            }
        </Container>
    );
}

export default Cart;