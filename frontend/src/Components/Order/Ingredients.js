import React, {useEffect, useState} from "react";
import { Card, Col, Row, Spinner, Alert, Button } from "react-bootstrap";
import useDataApi from "../CustomUseEffect/UseDataApi";
import IngredientsRow from "./IngredientsRow";

const INGREDIENT_URL = '/api/ingredients';
const INGREDIENTS = "ingredients";

function Ingredients({ addIngredient }) {
    const [ingredientList, setIngredientList] = useState([])
    const [{ data: ingredients, isLoading, isError }, setUrl] = useDataApi(null, []); // '/api/ingredients'

    useEffect(() => {
        async function loadIngredients() {
            try {
                const storedIngredients = JSON.parse(localStorage.getItem(INGREDIENTS));
                if (!storedIngredients || storedIngredients.length !== 8) {
                    await setUrl(INGREDIENT_URL);
                    setIngredientList(ingredients);
                    localStorage.setItem(INGREDIENTS, JSON.stringify(ingredients));
                } else {
                    setIngredientList(storedIngredients);
                }
            } catch (error) {
                setIngredientList([]);
            }
        }

        loadIngredients();
    }, [ingredients]);


    return (
        <Row className="mt-4 ">
            {isError && !ingredientList && <Alert variant="danger" className="w-100">Error fetching ingredients.</Alert>}
            {isLoading || !ingredientList ? (
                <div className="d-flex justify-content-center my-4 w-100">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row className="w-100 flex-nowrap">
                    <IngredientsRow ingredients={ingredientList} addIngredient={addIngredient}/>
                </Row>
            )}
        </Row>
    );
}

export default Ingredients;
