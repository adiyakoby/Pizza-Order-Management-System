import {Button, Card, Col} from "react-bootstrap";
import React, {useEffect} from "react";


function IngredientsRow({ingredients, addIngredient}) {

    return (
        <>
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
        </>
    );
}

export default IngredientsRow;