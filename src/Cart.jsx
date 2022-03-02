import {Link} from "react-router-dom"
import { useCartContext } from './components/CartContext'
import CartVacio from "./components/CartVacio"
import { addDoc, collection, getDocs, getFirestore, where, writeBatch, query, documentId } from "firebase/firestore"
import { useState } from "react"
import NuevaOrden from "./NuevaOrden"

const Cart = () => {

    const {cartList, vaciarCarrito, eliminarItem, importeTotal}= useCartContext()
    console.log(cartList)

    const [condicional, setCondicional]= useState(false)

    const [dataForm, setDataForm]= useState({
        nombre:'', apellido:'', direccion:'', ciudad:'', email:'' 
    })

    const [idCompra, setIdCompra]= useState('')

    const comprar= async(e)=>{
        e.preventDefault()
        let nuevaCompra= {}
        nuevaCompra.buyer= dataForm
        nuevaCompra.total= importeTotal()

        nuevaCompra.items= cartList.map(cartItem=>{
            const id= cartItem.id;
            const nombre= cartItem.title;
            const precio= cartItem.precio*cartItem.cantidad
            const cantidad= cartItem.cantidad
            return {id, nombre, cantidad, precio}
        })
        const db= getFirestore()
        const nuevaCompraCollection= collection(db,'nuevasCompras')
        await addDoc(nuevaCompraCollection, nuevaCompra)
        .then(resp=> setIdCompra(resp.id))
        .catch(err=> console.log(err))
        .finally(()=> console.log('compra realizada'))

        const stockCollection= collection(db,'productos')
        const queryActualizarStock= query(stockCollection, where(documentId(),'in',cartList.map(it=>it.id)))

        const batch= writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(resp=> resp.docs.forEach(res=> batch.update(res.ref, {stock: res.data().stock - cartList.find(item=> item.id === res.id).cantidad})))
        .catch(err=> console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCondicional(true)
    }

    function capturaInput(e){
        setDataForm({...dataForm,[e.target.name]: e.target.value})
    }
    console.log(dataForm)
    return(
        <>
        {condicional === true ? ( <NuevaOrden idCompra={idCompra}/> ) : 

        (cartList.length ===  0 ? (<CartVacio/>) : 
            (<center>
                <div className="card" style={{width: '60rem'}}>
                    <div className="card-body">
                        {cartList.map(prod =>     
                        <>  <center>
                                <li key={prod.id}>{prod.title}   Cantidad:{prod.cantidad} Precio:${prod.precio} <button className="btn btn-primary" onClick={()=>eliminarItem(prod.id)}>Eliminar</button></li>    
                            </center>
                        </>
                        )}
                        <hr/>
                        <nav>
                        <h3>Total:${importeTotal()}</h3>
                        <Link to='/'><button className="btn btn-secundary" onClick={vaciarCarrito}>Vaciar carrito</button></Link>
                        <Link to='/'><button className="btn btn-primary">Agregar más productos</button></Link>
                        </nav> 
                        <hr/>
                        <form onSubmit={comprar}>
                            <div className="row">
                                <div className="col">
                                    <label for="inputName">Nombre</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Nombre" name="nombre" defaultValue={dataForm.nombre}onChange={capturaInput}/>
                                </div>

                                <div className="col">
                                    <label for="inputName">Apellido</label>
                                    <input onChange={capturaInput} type="text" className="form-control" id="inputApellido" placeholder="Apellido" name="apellido" defaultValue={dataForm.apellido}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputAddress">Dirección</label>
                                    <input onChange={capturaInput} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="direccion" defaultValue={dataForm.direccion}/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label for="inputCity">Ciudad</label>
                                    <input onChange={capturaInput} type="text" className="form-control" id="inputCity" placeholder="Ciudad" name="ciudad" defaultValue={dataForm.ciudad}/>
                                </div>
                            
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"name="emailOK" defaultValue={dataForm.email} required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Confirma tu Email</label>
                                    <input onChange={capturaInput} type="email" className="form-control" id="inputEmail4" placeholder="Confirma tu Email" name="email" defaultValue={dataForm.email} required/>
                                </div>        
                            </div>
                            <button  className="btn btn-primary">Comprar</button>
                            
                        </form>                                      
                    </div>
                </div>
            </center>)   
        )}</>     
    )
}
            
 
export default Cart;
