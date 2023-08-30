//componente único y centralizado que nos va a permitir que a cada componente reciba su estado sin necesidad de intermediario

import {createContext, useState, useContext} from "react";
export const CartContext = createContext([]);

function CartProvider ({children}){ //CHILDREN es la PROP
    const [CartQuantity, setCartQuantity] = useState(0) //componente REACT que le creamos un estado

    const incrementCartQuantity = ()=> {
        setCartQuantity(CartQuantity + 1); //seteo la cant quantity = cantidad
    }
    const decrementCartQuantity = ()=> {
        setCartQuantity(CartQuantity - 1); //seteo la cant quantity = cantidad
    }


    return( 
    <CartContext.Provider value={{ //el PROVIDER me devulve exactamente el contexto que yo cree provider=react
        CartQuantity,
        incrementCartQuantity,
        decrementCartQuantity,
    }}> 
        {children} 
    </CartContext.Provider>)
}

export function useCartContext(){
    return useContext(CartContext);
}

export default CartProvider;