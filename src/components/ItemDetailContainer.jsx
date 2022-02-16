import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {llamado} from './Mock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [productos, setProductos]= useState({})
    const {idId}= useParams()

    useEffect(()=>{
        if (idId) {
            llamado 
            .then(resp => setProductos(resp.find(prod => prod.id === idId)))
            .catch(err=> console.log(err)) 
        } else {
            llamado
            .then(resp=> setProductos(resp))
            .catch(err=> console.log(err))
        }
    },[idId])

    return (
        <center>
          <ItemDetail prod= {productos}/>
        </center>
    )    
}

export default ItemDetailContainer
