/**
 * Ingredients.js
 *
 * This file defines the Ingredients component, which fetches a list of ingredients
 * from an API endpoint or localStorage. It displays the ingredients in a row using
 * the IngredientsRow component. It shows a loading spinner while fetching data
 * and handles errors if data retrieval fails.
 */

import React, {useEffect, useState} from "react";
import { Row, Spinner, Alert } from "react-bootstrap";
import useDataApi from "../CustomUseEffect/UseDataApi";
import IngredientsRow from "./IngredientsRow";

const INGREDIENT_URL = '/api/ingredients';
const INGREDIENTS = "ingredients";

/**
 * Ingredients Component
 *
 * This component fetches a list of ingredients from an API endpoint or localStorage.
 * It displays the ingredients in a row using the IngredientsRow component.
 * Shows a loading spinner while fetching data and handles errors if data retrieval fails.
 *
 * @param {function} addIngredient - Function to add an ingredient to the order.
 * @returns {JSX.Element} The rendered Ingredients component.
 */
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
