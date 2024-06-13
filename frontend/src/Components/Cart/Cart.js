import {Alert, Button, Container} from "react-bootstrap";
import CartTable from "./CartTable";
import React, {useContext, useState} from "react";
import OrderForm from "./OrderForm";
import {CartContextProvider} from "../Context/CartContext";


function Cart() {
    const { cart } = useContext(CartContextProvider);
    const [ordering, setOrdering] = useState(false)

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