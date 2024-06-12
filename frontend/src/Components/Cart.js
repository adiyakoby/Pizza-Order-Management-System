import {useReducer} from "react";

function pizzasReducer(state, action) {
    switch(action.type) {
        case "add" : {

        }

        case "remove" : {

        }


    }

}

function Cart() {
    const [Pizzas, setPizzas] = useReducer(pizzasReducer, [])
}

export default Cart;