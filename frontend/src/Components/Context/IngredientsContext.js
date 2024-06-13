/**
 * IngredientsContext
 *
 * Context provider for managing ingredients state using useReducer.
 */
import {createContext, useReducer} from "react";


/**
 * IngredientsContext
 *
 * Context provider for managing ingredients state using useReducer.
 *
 * @param {object} children - React component(s) wrapped by the context provider.
 * @returns {JSX.Element} Provider component wrapping children with ingredients state and dispatch.
 */
export const IngredientsContextProvider = createContext();


/**
 * ingredientsReducer
 *
 * Reducer function to manage state actions related to ingredients.
 *
 * @param {Array} state - Current ingredients state.
 * @param {object} action - Action object specifying type and payload for state modification.
 * @returns {Array} New state after applying the action.
 */
function ingredientsReducer(state, action) {
    switch(action.type) {
        case "add" : {
            return [
                ...state, action.payload
            ]
        }
        case "update" : {
            const { index, newIngredient } = action.payload;
            return state.map((ingredient, i) =>
                i === index ? { ...ingredient, ...newIngredient } : ingredient
            );
        }
        case "remove" : {
            return state.filter((ingredient, i) => i !== action.payload)
        }
        case "reset" : {
            return []
        }
    }
}

/**
 * IngredientsContext Component
 *
 * Provides IngredientsContextProvider with ingredients state and dispatch using useReducer.
 *
 * @param {object} children - React component(s) wrapped by the context provider.
 * @returns {JSX.Element} Provider component wrapping children with ingredients state and dispatch.
 */
function IngredientsContext({children}) {
    const [ingredients, ingredientsDispatch] = useReducer(ingredientsReducer,[])

    return(
        <IngredientsContextProvider.Provider value={{ingredients, ingredientsDispatch}}>
            {children}
        </IngredientsContextProvider.Provider>
    );
}

export default IngredientsContext;