import React from 'react'
import {Link} from "react-router-dom"


function NuevaOrden({idCompra}) {
    
  return (
     <center>
        <h2>Felicitaciones tu compra se realizó con exito</h2>
        <h4>Este es el ID de tu compra:{idCompra}</h4>
        <Link to='/'><button className="btn btn-primary">Inicio</button></Link>   
     </center> 
   
  )
}

export default NuevaOrden