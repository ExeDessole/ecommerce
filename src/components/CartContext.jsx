import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {
        setCartList([...cartList, items])
    }

    function vaciarCarrito() {
        setCartList([])
    }
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
        {children}
        </CartContext.Provider>
    )
} 
