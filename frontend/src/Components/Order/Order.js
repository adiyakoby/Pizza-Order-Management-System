/**
 * Order.js
 *
 * This file defines the Order component, which allows users to create and manage their pizza order.
 * It displays a table of selected ingredients, calculates the total price, and provides options to add
 * ingredients, remove ingredients, add the order to the cart, or cancel the order and reset ingredients.
 */
import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderTable from "./OrderTable";
import Ingredients from "./Ingredients";
import { CartContextProvider } from "../Context/CartContext";
import { IngredientsContextProvider } from "../Context/IngredientsContext";
import "./Order.css"; // Import your updated Order.css for styling


/**
 * Order Component
 *
 * Displays a pizza order management interface. It allows users to select ingredients, view them in a table,
 * calculate the total price, and perform actions like adding to cart or canceling the order.
 *
 * @returns {JSX.Element} The rendered Order component.
 */
function Order() {

    // Context for managing ingredients and cart
    const { ingredients, ingredientsDispatch } = useContext(IngredientsContextProvider);
    const { cartDispatch } = useContext(CartContextProvider);

    // Adds an ingredient to the current order if it's not already included
    const addIngredient = (ingredient) => {
        for (const ingredientElement of ingredients) {
            if (ingredientElement.name === ingredient.name) {
                return null;
            }
        }
        ingredientsDispatch({ type: "add", payload: ingredient });
    };

    // Removes an ingredient from the current order
    const removeIngredient = (index) => {
        ingredientsDispatch({ type: "remove", payload: index });
    };

    // Adds the current order to the cart and resets ingredients state
    const addToCart = () => {
        cartDispatch({ type: "add", payload: ingredients });
        ingredientsDispatch({ type: "reset" });
    };

    // Calculates the total price of the current order
    const totalPrice = ingredients.reduce((totalPrice, ingredient) => totalPrice + parseFloat(ingredient.price), 0).toFixed(2);

    return (
        <>
            <video autoPlay muted loop className="background-video">
                <source src="/PizzaClip2.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <Container fluid className="order-container">
                <OrderTable ingredients={ingredients} removeIngredient={removeIngredient} />
                <div className="total-price">
                    Total Price: ${totalPrice}
                </div>
                <Row className="button-row justify-content-center"> {/* Center align buttons */}
                    <Col xs="auto" className="mb-2">
                        <Button
                            disabled={ingredients.length < 2}
                            onClick={addToCart}
                            className="add-to-cart-btn"
                        >
                            Add to Cart
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Link className="btn btn-danger" to='/' onClick={() => ingredientsDispatch({ type: "reset" })}>
                            Cancel
                        </Link>
                    </Col>
                </Row>
                <Ingredients addIngredient={addIngredient} />
            </Container>
        </>
    );
}

export default Order;
