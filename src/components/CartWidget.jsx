import img from './imagenes/galeria'
import React from 'react';
import { useCartContext } from './CartContext';

function Carrito() {
  const {cartRender}= useCartContext()
  return (
    <>
    {cartRender()}
    <img className="logo" src={img[5]} alt='Imagen de carrito'/>
    </>
  )
}

export default Carrito;
