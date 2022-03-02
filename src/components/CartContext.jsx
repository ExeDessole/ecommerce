import { useState, createContext, useContext } from "react";


const CartContext = createContext([]);
export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {

       const index= cartList.findIndex(i=> i.id === items.id)

       if (index > -1) {
           const cantVieja= cartList[index].cantidad
           cartList.splice(index,1)
           setCartList([...cartList, {...items, cantidad: items.cantidad + cantVieja}])   
       } else {
            setCartList([...cartList, {...items, cantidad: items.cantidad}])
       }           
    }
    
    function vaciarCarrito() {
        setCartList([])
    }
    
    const eliminarItem=(id)=>{
        const itemEliminado= cartList.filter(item=> item.id !== id)
        setCartList(itemEliminado)
        console.log(itemEliminado)
    }

    const importeTotal=()=>{
        const total= cartList.reduce((prev, curr)=> prev + (curr.cantidad * curr.precio), 0)
        return total
    }

    const cartRender=()=>{
        const total= cartList.reduce((prev, curr)=> prev + curr.cantidad, 0)
        return total
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            eliminarItem,
            importeTotal,
            cartRender
        }}>
        {children}
        </CartContext.Provider>
    )
} 
