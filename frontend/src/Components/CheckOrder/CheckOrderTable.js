import React from "react";
import { Table } from "react-bootstrap";
import './CheckOrderTable.css';

function CheckOrderTable({ orderDetails, calculatePizzaPrice }) {
    return (
        <Table striped bordered hover responsive className="shadow-sm">
            <thead className="thead-dark">
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
                        <ul className="list-unstyled mb-0">
                            {pizza.ingredients.map((ingredient, i) => (
                                <li key={i} className="ingredient-list-item">
                                    <span>{ingredient.name}</span>
                                    <span className="text-muted">(${ingredient.price})</span>
                                </li>
                            ))}
                        </ul>
                    </td>
                    <td>${calculatePizzaPrice(pizza).toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default CheckOrderTable;
