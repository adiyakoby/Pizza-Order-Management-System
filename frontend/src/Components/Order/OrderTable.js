import React from "react";
import { Table, Button, Row, Col, Alert } from "react-bootstrap";

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
