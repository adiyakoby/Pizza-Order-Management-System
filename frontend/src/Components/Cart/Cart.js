import {useContext, useEffect} from "react";
import {CartContextProvider} from "../Context/CartContext";


function Cart() {
    const {cart} = useContext(CartContextProvider);


    return (
        <>
            <h1>Cart page</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        item.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price}</li>
                        ))
                    ))}
                </ul>
            )}
        </>
    );
}

export default Cart;