import { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Col, Row, Spinner, Alert, Button } from "react-bootstrap";

/**
 * Custom hook for fetching data from an API.
 *
 * @param {string} initialUrl - The initial URL to fetch data from.
 * @param {any} initialData - The initial state for the data.
 * @returns {[{data: any, isLoading: boolean, isError: boolean}, function]} - Returns the state object and the URL setter function.
 */
const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

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
