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
    const [cart, cartDispatch] = useReducer(cartReducer, [])


    return(
        <CartContextProvider.Provider value={{cart, cartDispatch}}>
            {children}
        </CartContextProvider.Provider>

    );
}

export default CartContext;