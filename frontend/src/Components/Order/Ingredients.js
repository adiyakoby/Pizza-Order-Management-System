import { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Col, Container, Row, Spinner, Alert, Button } from "react-bootstrap";

/**
 * Custom hook for fetching data from an API.
 *
 * @param {string} initialUrl - The initial URL to fetch data from.
 * @param {any} initialData - The initial state for the data.
 * @returns {[{data: any, isLoading: boolean, isError: boolean}, function]} - Returns the state object and the URL setter function.
 */
const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData); // data to be fetched
    const [url, setUrl] = useState(initialUrl); // any change on this state variable will trigger a fetch
    const [isLoading, setIsLoading] = useState(false); // is it fetching?
    const [isError, setIsError] = useState(false); // is there an error?

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

    return [{ data, isLoading, isError }, setUrl]; // return the data and the URL setter function
};

function Ingredients({ addIngredient }) {
    // Using the custom hook to fetch data
    const [{ data: ingredients, isLoading, isError }] = useDataApi('/api/ingredients', []);

    return (
        <Container>
            {isError && <Alert variant="danger">Error fetching ingredients.</Alert>}
            {isLoading ? (
                <div className="d-flex justify-content-center my-4">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row>
                    {ingredients.map((ingredient, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-4">
                            <Card className="h-100">
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
        </Container>
    );
}

export default Ingredients;
