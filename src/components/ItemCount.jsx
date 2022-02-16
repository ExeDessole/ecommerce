import {useState} from 'react'

function ItemCount({onAdd}) {
    const [count, setCount]= useState(0);
    console.log(count)
   
    const sumar=()=>{

        setCount(count+1)
        
    };
    const restar=(e)=>{
        if (count >= 1) {
            setCount(count-1);
        } else {
          e.preventDefault()  
        }     
    };
    return (
        <center>
            <button type="button" className="btn btn-outline-dark" onClick={restar}>-</button>
            <div className="btn btn-outline-dark">{count}</div>
            
            <button type="button" className="btn btn-outline-dark" onClick={sumar}>+</button>
            <hr/>
            <button type="button" className="btn btn-primary" onClick={()=>onAdd(count)} disabled={count < 1 && 'disabled'}>Agregar al carrito</button>       
        </center>
    )
}

export default ItemCount
