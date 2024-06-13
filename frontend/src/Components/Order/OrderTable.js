/**
 * OrderTable.js
 *
 * This file defines the OrderTable component, which displays a table of selected ingredients in the pizza order.
 * It allows users to view the list of ingredients, their prices, and provides an option to remove ingredients from
 * the order. It also displays a warning message if fewer than 2 ingredients are selected.
 */
import React from "react";
import { Table, Button, Row, Col, Alert } from "react-bootstrap";

/**
 * OrderTable Component
 *
 * Displays a table of selected ingredients in the pizza order. Each row in the table
 * shows the ingredient name, price, and provides an option to remove the ingredient.
 * If fewer than 2 ingredients are selected, it displays a warning message.
 *
 * @param {Array} ingredients - Array of ingredients objects containing name and price.
 * @param {function} removeIngredient - Function to remove an ingredient from the order.
 * @returns {JSX.Element} The rendered OrderTable component.
 */
function OrderTable({ ingredients, removeIngredient }) {
    return (
        <Row className="overflow-auto justify-content-center mt-auto w-100">
            <Col xs={10} md={8} lg={6}>
                <Table responsive striped  bordered hover className="shadow-sm">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Ingredient</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ingredients.map((ingredient, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ingredient.name}</td>
                            <td>${ingredient.price.toFixed(2)}</td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => removeIngredient(index)}>
                                    X
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                {ingredients.length < 2 && (
                    <Alert variant="warning" className="mt-3">
                        Please add at least 2 ingredients to your order.
                    </Alert>
                )}
            </Col>
        </Row>
    );
}

export default OrderTable;
