import {Alert, Button, Container} from "react-bootstrap";
import CartTable from "./CartTable";
import React, {useContext, useEffect, useState} from "react";
import OrderForm from "./OrderForm";
import {CartContextProvider} from "../Context/CartContext";
import "./Cart.css";

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
        <div className="cart-page">
            <video autoPlay muted loop className="background-video">
                <source src="/PizzaClip2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-container">
                <Container fluid className="cart-container">
                    <CartTable />
                    {cart.length === 0 && !ordering && (
                        <Alert variant="warning">Your cart is empty. Please add some pizzas to your cart.</Alert>
                    )}
                    {ordering ? (
                        <OrderForm />
                    ) : (
                        <Button onClick={() => setOrdering(true)} disabled={cart.length === 0} className="order-button">
                            Order Now
                        </Button>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default Cart;