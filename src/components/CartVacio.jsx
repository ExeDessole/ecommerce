import React from 'react'
import { Link } from 'react-router-dom'

export const CartVacio = () => {
  return (
    <center>
        <h2>Tu carrito esta vacío</h2>
        <Link to='/'><button className="btn btn-primary">Ir a la Tienda</button></Link>
    </center>
  )
}

export default CartVacio;
