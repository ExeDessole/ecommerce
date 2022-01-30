import {useState,useEffect} from 'react'
import {llamado} from './Mock'
import Items from './Items'

function ItemList() {
    const [productos,setProductos]= useState([])
    const [loading,setLoading]= useState(true)
    

    useEffect(()=>{
        llamado
        .then(resp=> setProductos(resp))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    },[])

    return (
        <div>
            {loading ? <h2>Cargando...</h2> : productos.map(prod =><Items key= {prod.id} card= {prod}/>)}
        </div>
    )
}

export default ItemList