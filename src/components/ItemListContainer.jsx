import ItemList from "./ItemList"
import {useState,useEffect} from 'react'
import {llamado} from './Mock'
import {useParams} from 'react-router-dom'
import Loading from "./Loading"

function ItemListContainer() {
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
        <center className="row" style={{gap:'1.5rem'}}>
            {loading ? <Loading/> : <ItemList productos={productos}/>}
        </center>       
    )
}

export default ItemListContainer
