import Ingredients from "./Ingredients";
import {Button, Container} from "react-bootstrap";
import {useContext, useState} from "react";
import OrderTable from "./OrderTable";
import {CartContextProvider} from "../Context/CartContext";
import {IngredientsContextProvider} from "../Context/IngredientsContext";
import {Link} from "react-router-dom";

function Order() {
    const {ingredients, ingredientsDispatch} = useContext(IngredientsContextProvider);
    const {cartDispatch} = useContext(CartContextProvider);


    function addIngredient(ingredient) {
        if (!ingredients.includes(ingredient)) {
            ingredientsDispatch({type: "add", payload: ingredient});
        }
    }

    function removeIngredient(index) {
        ingredientsDispatch({type: "remove", payload: index});
    }

    function addToCart() {
        cartDispatch({type: "add", payload: ingredients});
        ingredientsDispatch({type: "reset"});
    }

    return (
        <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
            <OrderTable ingredients={ingredients} removeIngredient={removeIngredient}/>
            <div style={{fontSize: '24px', fontWeight: 'bold'}}>
                Total Price:
                ${ingredients.reduce((totalPrice, ingredient) => totalPrice + parseInt(ingredient.price), 5)}
            </div>
            <Button disabled={ingredients.length < 2} onClick={addToCart}> add to cart</Button>
            <Link className="btn btn-danger" to='/' onClick={() => ingredientsDispatch({type: "reset"})}> Cancel</Link>
            <Ingredients addIngredient={addIngredient}/>
        </Container>
);

}

export default Order;
