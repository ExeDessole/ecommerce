import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loading from "./Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"

function ItemDetailContainer() {
    const [productos, setProductos]= useState({})
    const {idId}= useParams()
    const [loading,setLoading]= useState(true)

    useEffect(()=>{

        const db= getFirestore()
        const queryCollection= doc(db, 'productos', idId)
        getDoc(queryCollection)
        .then(res=> setProductos({id: res.id, ...res.data()}))
        // .catch(err=> console.log(err))
        .finally(()=> setLoading(false)) 
    
    },[idId])

    return (
        <center className="row" style={{gap:'1.5rem'}}>
            {loading ? <Loading/> : <ItemDetail prod={productos}/>}
        </center> 
    )    
}

export default ItemDetailContainer
