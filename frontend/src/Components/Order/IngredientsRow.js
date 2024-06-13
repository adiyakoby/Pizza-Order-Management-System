/**
 * IngredientsRow.js
 *
 * This file defines the IngredientsRow component, which renders a row of ingredient cards.
 * It maps through the provided list of ingredients and displays each ingredient in a Card component.
 * Each card includes the ingredient's image, name, price, and an "Add" button to add the ingredient to the order.
 */
import {Button, Card, Col} from "react-bootstrap";
import React from "react";
import "./IngredientsRow.css"; // Import your custom CSS file

/**
 * IngredientsRow Component
 *
 * Renders a row of ingredient cards based on the provided array of ingredients. Each card
 * displays the ingredient's image, name, price, and provides an "Add" button to add the ingredient
 * to the order.
 *
 * @param {Array} ingredients - Array of objects representing ingredients with name, price, and image.
 * @param {function} addIngredient - Function to add an ingredient to the order.
 * @returns {JSX.Element} The rendered IngredientsRow component.
 */
function IngredientsRow({ingredients, addIngredient}) {
    return (
        <>
            {ingredients.map((ingredient, index) => (
                <Col key={index} xs="auto" className="mb-4">
                    <Card className="h-100 w-100 border-0 shadow-sm custom-card">
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