
import {useState} from 'react'
import {useEffect} from 'react'
import {llamado} from './Mock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [productos, setProductos]= useState({})

    useEffect(()=>{
        llamado
        .then(resp=> setProductos(resp.find(prod=> prod.id === '1')))
    },[])

    return (
        <div>
          <ItemDetail prod= {productos}/>
        </div>
    )    
}
console.log(ItemDetail)
export default ItemDetailContainer
