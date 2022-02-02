import {useState,useEffect} from 'react'
import {llamado} from './Mock'
import Items from './Items'
import { useParams } from 'react-router-dom'

function ItemList() {
    const [productos,setProductos]= useState([])
    const [loading,setLoading]= useState(true)
    const {idCategoria}= useParams()

    useEffect(()=>{
        if (idCategoria) {
            llamado
            .then(resp=> setProductos(resp.filter(prod=> prod.categoria === idCategoria)))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false)) 
        } else {
            llamado
            .then(resp=> setProductos(resp))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
        }
    },[idCategoria])

    return (
        <div>
            {loading ? <h2>Cargando...</h2> : productos.map(prod =><Items key= {prod.id} card= {prod}/>)}
        </div>
    )
}

export default ItemList