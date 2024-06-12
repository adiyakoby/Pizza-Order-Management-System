import {createContext, useReducer} from "react";

export const CartContextProvider = createContext();


function cartReducer(state, action) {
    switch(action.type) {
        case "add" : {
            return [
                ...state, action.payload
            ]
        }

        case "remove" : {
            return state.filter((pizza, i) => pizza !== action.payload)
        }
    }

}


function CartContext({children}) {
    const [cart, dispatch] = useReducer(cartReducer, [])

    return(
        <CartContextProvider.Provider value={{cart, dispatch}}>
            {children}
        </CartContextProvider.Provider>

    );
}

export default CartContext;