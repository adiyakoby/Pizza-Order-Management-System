import {createContext, useReducer} from "react";



export const IngredientsContextProvider = createContext();

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

function IngredientsContext({children}) {
    const [ingredients, ingredientsDispatch] = useReducer(ingredientsReducer,[])
    return(

        <IngredientsContextProvider.Provider value={{ingredients, ingredientsDispatch}}>
            {children}
        </IngredientsContextProvider.Provider>

    );
}

export default IngredientsContext;