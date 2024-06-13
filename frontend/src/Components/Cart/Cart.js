import {Button, Container} from "react-bootstrap";
import CartTable from "./CartTable";
import {useState} from "react";
import OrderForm from "./OrderForm";


function Cart() {
    const [ordering, setOrdering] = useState(false)

    return (
        <Container
            fluid
            className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light"
        >
            <CartTable/>

            {ordering ?
                <OrderForm/> : <Button onClick={() => setOrdering(true)}> Order Now</Button>
            }
        </Container>
    );
}

export default Cart;