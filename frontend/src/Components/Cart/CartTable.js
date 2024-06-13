import React, {useContext, useEffect, useState} from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { CartContextProvider } from "../Context/CartContext";
import useDataApi from "../CustomUseEffect/UseDataApi";

const INGREDIENTS = "ingredients";

function CartTable() {
    const { cart, cartDispatch } = useContext(CartContextProvider);
    const [selectedIngredients, setSelectedIngredients] = useState({});
    const [ingredientList, setIngredientList] = useState([])

    useEffect(() => {
        setIngredientList(JSON.parse(localStorage.getItem(INGREDIENTS)));
    }, []);

    //working
    const handleAddIngredient = (index, ingredient) => {
        const updatedPizza = [...cart[index], ingredient];
        cartDispatch({ type: "update", payload: { index, updatedPizza } });
    };


    //working
    const handleRemovePizza = (index) => {
        cartDispatch({ type: "remove", payload: index });
    };


    //working
    const handleRemoveIngredient = (index, ingredientIndex) => {
        const updatedPizza = cart[index].filter((_, i) => i !== ingredientIndex);
        if (updatedPizza.length < 2) {
            return null;
        }
        cartDispatch({ type: "update", payload: { index, updatedPizza } });
    };


    //working
    const handleSelectChange = (pizzaIndex, event) => {
        setSelectedIngredients({
            ...selectedIngredients,
            [pizzaIndex]: event.target.value,
        });
    };


    //working
    const getRemainingIngredients = (pizzaIngredients) => {
        return ingredientList.filter(
            availableIngredient => !pizzaIngredients.some(
                pizzaIngredient => pizzaIngredient.name === availableIngredient.name
            )
        );
    };

    const calculatePizzaPrice = (pizza) => {
        return pizza.reduce((total, ingredient) => total + ingredient.price, 5);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, pizza) => total + calculatePizzaPrice(pizza), 0);
    };


    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                <tr>
                    <th>Pizza</th>
                    <th>Ingredients</th>
                    <th>Add Ingredient</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((pizza, index) => (
                    <tr key={index}>
                        <td>Pizza {index + 1}</td>
                        <td>
                            {pizza.map((ingredient, i) => (
                                <div key={i} className="d-flex justify-content-between align-items-center mb-2">
                                    <span>{ingredient.name}</span>
                                    <Button
                                        className="ms-2"
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleRemoveIngredient(index, i)}
                                    >
                                        x
                                    </Button>
                                </div>
                            ))}
                        </td>
                        <td>
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                const ingredient = ingredientList.find(ing => ing.name === selectedIngredients[index]);
                                if (ingredient) {
                                    handleAddIngredient(index, ingredient);
                                    setSelectedIngredients({...selectedIngredients, [index]: ""});
                                }
                            }}>
                                <Form.Group as={Row} className="mb-2">
                                    <Col sm="8">
                                        <Form.Control
                                            as="select"
                                            value={selectedIngredients[index] || ""}
                                            onChange={(e) => handleSelectChange(index, e)}
                                            className="ingredient-select"
                                        >
                                            <option value="">Select Ingredient</option>
                                            {getRemainingIngredients(cart[index]).map((ingredient, i) => (
                                                <option key={i} value={ingredient.name}>
                                                    {ingredient.name}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col sm="4">
                                        <Button type="submit" variant="primary" disabled={!selectedIngredients[index]}>
                                            Add
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </td>
                        <td>${calculatePizzaPrice(pizza).toFixed(2)}</td>
                        <td>
                            <Button variant="danger" onClick={() => handleRemovePizza(index)}>
                                Remove Pizza
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <div className="mt-3">
                <h4>Total Price: ${calculateTotalPrice().toFixed(2)}</h4>
            </div>
        </>

    );
}

export default CartTable;
