import React from 'react'
import {useState} from 'react'

function ItemCount() {
    const [count, setCount]= useState(0);

    const handleCount=()=>{
        setCount(count+1);
    };
    return (
        <div>
            <h2>Soy el contador</h2>
            {count}
            <button onClick={handleCount}>+</button>
        </div>
    )
}

export default ItemCount
