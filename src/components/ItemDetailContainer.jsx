
import {useState} from 'react'
import {useEffect} from 'react'
import {llamado} from './Mock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [productos, setProductos]= useState({})
    const {idDetail}= useParams()

    useEffect(()=>{
        if (idDetail) {
            llamado
            .then(resp=> setProductos(resp.filter(prod=> prod.detail === idDetail)))
            .catch(err=> console.log(err)) 
        } else {
            llamado
            .then(resp=> setProductos(resp))
            .catch(err=> console.log(err))
        }
    },[idDetail])

    return (
        <div>
          <ItemDetail prod= {productos}/>
        </div>
    )    
}
console.log(ItemDetail)
export default ItemDetailContainer
