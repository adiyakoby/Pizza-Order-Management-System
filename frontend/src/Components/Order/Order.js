import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderTable from "./OrderTable";
import Ingredients from "./Ingredients";
import { CartContextProvider } from "../Context/CartContext";
import { IngredientsContextProvider } from "../Context/IngredientsContext";

function Order() {
    const { ingredients, ingredientsDispatch } = useContext(IngredientsContextProvider);
    const { cartDispatch } = useContext(CartContextProvider);

    const addIngredient = (ingredient) => {
        for (const ingredientElement of ingredients) {
            if (ingredientElement.name === ingredient.name) {
                return null;
            }
        }
        ingredientsDispatch({ type: "add", payload: ingredient });
    };

    const removeIngredient = (index) => {
        ingredientsDispatch({ type: "remove", payload: index });
    };

    const addToCart = () => {
        cartDispatch({ type: "add", payload: ingredients });
        ingredientsDispatch({ type: "reset" });
    };

    const totalPrice = ingredients.reduce((totalPrice, ingredient) => totalPrice + parseFloat(ingredient.price), 0).toFixed(2);

    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center text-center bg-light">
            <OrderTable ingredients={ingredients} removeIngredient={removeIngredient} />
            <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>
                Total Price: ${totalPrice}
            </div>
            <Row>
                <Col>
                    <Button disabled={ingredients.length < 2} onClick={addToCart} className="mb-2">
                        Add to Cart
                    </Button>
                </Col>
                <Col>
                    <Link className="btn btn-danger mb-2" to='/' onClick={() => ingredientsDispatch({ type: "reset" })}>
                        Cancel
                    </Link>
                </Col>
            </Row>
            <Ingredients addIngredient={addIngredient} />
        </Container>
    );
}

export default Order;
