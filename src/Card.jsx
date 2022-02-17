import React, { useContext } from 'react'
import { CartContext } from './components/CartContext'
import {Link} from "react-router-dom"

const Card = () => {

    const {cartList, vaciarCarrito}= useContext(CartContext)
    return (
        <div className="card" style={{width: '40rem'}}>
            <div className="card-body">
                {cartList.map(prod => <li key={prod.id}>{prod.title} -  Cantidad:{prod.cantidad}</li>)}
                <hr/>
                <nav>
                <Link to='/'><button className="btn btn-secundary" onClick={vaciarCarrito}>Vaciar carrito</button></Link>
                    <button className="btn btn-primary">Comprar</button>
                </nav>
            </div>
        </div>
    )
}

export default Card
