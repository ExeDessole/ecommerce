import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"
import { CartContext } from "./CartContext";

function ItemDetail({prod}) {
const {cartList, agregarAlCarrito}= useContext(CartContext)  
console.log(cartList)
const [show, setShow]= useState(true)

const onAdd=(cant)=>{
  setShow(false)
  agregarAlCarrito({...prod, cantidad: cant})
}

  return(
    <div className="card" style={{width: '40rem'}}>
      <div className="card-body">
        <img className="card-img-top" src={prod.foto} alt="Card image cap"/>
        <h5 className="card-title">{prod.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{prod.precio}</h6>
        <p className="card-text">{prod.text}</p>
        {show ? <ItemCount onAdd={onAdd}/> : 
        <nav>
          <Link to='/card'><button className="btn btn-secundary">Terminar Compra</button></Link>
          <Link to='/'><button className="btn btn-primary">Seguir comprando</button></Link>
        </nav>}
      </div>
    </div>
  )
}

export default ItemDetail;







