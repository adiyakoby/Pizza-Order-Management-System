import React from "react";
import { Card, Col, Row, Spinner, Alert, Button } from "react-bootstrap";
import useDataApi from "../CustomUseEffect/UseDataApi";

function Ingredients({ addIngredient }) {
    const [{ data: ingredients, isLoading, isError }] = useDataApi('/api/ingredients', []);

    return (
        <Row className="mt-4 ">
            {isError && <Alert variant="danger" className="w-100">Error fetching ingredients.</Alert>}
            {isLoading ? (
                <div className="d-flex justify-content-center my-4 w-100">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row className="w-100 flex-nowrap">
                    {ingredients.map((ingredient, index) => (
                        <Col key={index} xs="auto" className="mb-4">
                            <Card className="h-100 w-100 border-0 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={ingredient.image}
                                    alt={ingredient.name}
                                    style={{ maxHeight: '100px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Card.Title className="text-center" style={{ fontSize: '1rem' }}>{ingredient.name}</Card.Title>
                                    <Card.Text className="text-center" style={{ fontSize: '0.9rem' }}>${ingredient.price.toFixed(2)}</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => addIngredient(ingredient)}
                                        className="mt-auto"
                                    >
                                        Add
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Row>
    );
}

export default Ingredients;
