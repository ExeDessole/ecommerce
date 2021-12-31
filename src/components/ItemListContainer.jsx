import React from 'react'
import { llamado } from './Items'

function ItemListContainer() {
    return (

        llamado.then(resp=> {
            return{ ... resp, id: 1}
        })
        .then(resp=> console.log(resp))
        .catch(err=> console.log(err))

        <div>
            <h1>Soy el componente</h1>
        </div>
    )
}

export default ItemListContainer
