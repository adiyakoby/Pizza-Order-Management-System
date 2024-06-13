import { Card, Col, Row, Spinner, Alert, Button } from "react-bootstrap";
import useDataApi from "../CustomUseEffect/UseDataApi";


function Ingredients({ addIngredient }) {
    const [{ data: ingredients, isLoading, isError }] = useDataApi('/api/ingredients', []);

    return (
        <Row className="mb-auto">
            {isError && <Alert variant="danger">Error fetching ingredients.</Alert>}
            {isLoading ? (
                <div className="d-flex justify-content-center my-4">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row className="mt-4">
                    {ingredients.map((ingredient, index) => (
                        <Col key={index}  className="mb-4" >
                            <Card fluid className="h-100 border-1">
                                <Card.Img variant="top" src={ingredient.image} alt={ingredient.name} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{ingredient.name}</Card.Title>
                                    <Card.Text className="flex-grow-1">${ingredient.price.toFixed(2)}</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => { addIngredient(ingredient) }}>
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
