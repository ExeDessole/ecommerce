
import {useState} from 'react'
import {useEffect} from 'react'
import {llamado} from './Mock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [productos, setProductos]= useState({})
    const {idId}= useParams()

    useEffect(()=>{
        if (idId) {
            llamado 
            // .then(resp=> setProductos(resp.filter(prod=> prod.id === idId)))
            .then(resp => resp.filter(prod=> console.log(prod)))
            .catch(err=> console.log(err)) 
        } else {
            llamado
            .then(resp=> setProductos(resp))
            .catch(err=> console.log(err))
        }
    },[idId])

    return (
        <div>
          <ItemDetail prod= {productos}/>
        </div>
    )    
}

export default ItemDetailContainer
