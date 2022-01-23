import {useState,useEffect} from 'react'
import Items from './Items'
import {llamado} from './Mock'

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