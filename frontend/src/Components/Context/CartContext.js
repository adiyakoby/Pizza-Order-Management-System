/**
 * CartContext
 *
 * Context provider for managing cart state using useReducer.
 */
import {createContext, useReducer} from "react";

/**
 * CartContextProvider
 *
 * Context provider created using createContext from React. It provides the cart state
 * and dispatch function to its children components through context API.
 *
 * @type {React.Context<{cart: Array, cartDispatch: function}>}
 */
export const CartContextProvider = createContext();


/**
 * cartReducer
 *
 * Reducer function to manage state actions related to the cart. It handles adding, updating,
 * removing, and resetting items in the cart array based on dispatched actions.
 *
 * @param {Array} state - Current cart state.
 * @param {object} action - Action object specifying type and payload for state modification.
 * @returns {Array} New state after applying the action.
 */
function cartReducer(state, action) {
    switch(action.type) {
        case "add" : {
            return [
                ...state, action.payload
            ]
        }
        case "update" : {
            const { index, updatedPizza } = action.payload;
            return state.map((pizza, i) => (
                    i === index ? updatedPizza : pizza
            ));
        }
        case "remove" : {
            return state.filter((pizza, index) => index !== action.payload)
        }
        case "reset" : {
            return []
        }
    }
}

/**
 * CartContext Component
 *
 * Provides CartContextProvider with cart state and cartDispatch using useReducer.
 * Uses cartReducer to handle state modifications based on dispatched actions.
 *
 * @param {object} children - React component(s) wrapped by the context provider.
 * @returns {JSX.Element} Provider component wrapping children with cart state and dispatch.
 */
function CartContext({children}) {
    const [cart, cartDispatch] = useReducer(cartReducer, [])

    return(
        <CartContextProvider.Provider value={{cart, cartDispatch}}>
            {children}
        </CartContextProvider.Provider>

    );
}

export default CartContext;