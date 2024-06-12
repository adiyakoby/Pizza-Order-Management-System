import Ingredients from "./Ingredients";
import {Button, Container} from "react-bootstrap";
import {useContext, useState} from "react";
import OrderTable from "./OrderTable";
import {CartContextProvider} from "../Context/CartContext";

function Order() {
    const [ingredients, setIngredients] = useState([])
    const {dispatch} = useContext(CartContextProvider);


    function addIngredient(ingredient) {
        if (!ingredients.includes(ingredient)) {
            setIngredients([...ingredients, ingredient]);
        }
    }

    function removeIngredient(index) {
        setIngredients(ingredients.filter((ingredient, i) => i !== index));
    }

    function addToCart() {
        dispatch({type: "add", payload: ingredients});
        setIngredients([]);
    }

    return (
        <Container
            fluid
            className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light"
        >
            <OrderTable ingredients={ingredients} removeIngredient={removeIngredient}/>
            <div style={{fontSize: '24px', fontWeight: 'bold'}}>
                Total Price:
                ${ingredients.reduce((totalPrice, ingredient) => totalPrice + parseInt(ingredient.price), 5)}
            </div>
            <Button disabled={ingredients.length < 2} onClick={addToCart}> add to cart</Button>
            <Button className="bg-danger"> Cancel</Button>
            <Ingredients addIngredient={addIngredient}/>
        </Container>
);

}

export default Order;
