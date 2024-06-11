import Ingredients from "./Ingredients";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import OrderTable from "./OrderTable";

function Order() {
    const [ingredients, setIngredients] = useState([])

    function addIngredient(ingredient) {
        if (!ingredients.includes(ingredient)) {
            setIngredients([...ingredients, ingredient]);
        }
    }

    function removeIngredient(index) {
        setIngredients(ingredients.filter((ingredient, i) => i !== index));
    }


    return(
        <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
            <OrderTable ingredients={ingredients} removeIngredient={removeIngredient} />
            <Ingredients addIngredient={addIngredient} />
        </Container>


    );
}

export default Order;