import React, {useEffect} from 'react';
import {Table, Button, Container, Row, Col} from "react-bootstrap";

function OrderTable({ ingredients, removeIngredient }) {

    return (
            <Row className="overflow-auto justify-content-center mt-auto">
                <Col >
                    <Table  responsive striped bordered hover  >
                        <thead >
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
                                    <Button variant="danger" onClick={() => removeIngredient(index)}>
                                        X
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>


    );
}

export default OrderTable;
