/**
 * CheckOrderTable.js
 *
 * Component to display detailed order information including pizza ID, ingredients, and prices in a table format.
 * Uses Table component from react-bootstrap for structured layout.
 * Applies custom CSS styles from './CheckOrderTable.css' for enhanced visual presentation.
 */
import React from "react";
import { Table } from "react-bootstrap";
import './CheckOrderTable.css';

/**
 * CheckOrderTable Component
 *
 * Renders a table displaying detailed order information, including pizza ID, ingredients list,
 * and calculated price for each pizza in the order.
 *
 * @param {object} orderDetails - Details of the customer's order, containing an array of pizzas with ingredients and prices.
 * @param {function} calculatePizzaPrice - Function to calculate the total price of a pizza based on its ingredients.
 * @returns {JSX.Element} Rendered table displaying order details.
 */
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
