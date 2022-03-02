import ItemList from "./ItemList"
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loading from "./Loading"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


function ItemListContainer() {
    const [productos,setProductos]= useState([])
    const [loading,setLoading]= useState(true)
    const {idCategoria}= useParams()

    useEffect(()=>{
        
        if (idCategoria) {
            const db= getFirestore()
            const queryCollection= query(collection(db, 'productos'), where('categoria' ,'==', idCategoria ))
            getDocs(queryCollection)
            .then(res=> setProductos(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))
            // .catch(err=> console.log(err))
            .finally(()=> setLoading(false)) 
        } else {
            const db= getFirestore()
            const queryCollection= collection(db, 'productos')
            getDocs(queryCollection)
            .then(res=> setProductos(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))
            // .catch(err=> console.log(err))
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
