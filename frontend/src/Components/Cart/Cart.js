import {useContext, useEffect} from "react";
import {CartContextProvider} from "../Context/CartContext";
import {Container} from "react-bootstrap";
import CartTable from "./CartTable";


function Cart() {
    const {cart} = useContext(CartContextProvider);


    return (
        <Container
            fluid
            className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light"
        >
            <CartTable/>
        </Container>
    );
}

export default Cart;