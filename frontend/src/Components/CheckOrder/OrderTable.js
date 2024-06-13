import {Table} from "react-bootstrap";
import React from "react";


function checkOrderTable({orderDetails, calculatePizzaPrice}) {

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Pizza ID</th>
                <th>Ingredients</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {orderDetails.pizzas.map((pizza, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        <ul>
                            {pizza.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient.name} (${ingredient.price})</li>
                            ))}
                        </ul>
                    </td>
                    <td>${calculatePizzaPrice(pizza)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default checkOrderTable;