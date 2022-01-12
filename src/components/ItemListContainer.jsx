import React from 'react'
import { llamado } from './Items'

function ItemListContainer() {
    return (

        llamado.then(resp=> {
            return{...resp,id:1}
        })
        .then(resp=> console.log(resp))
        .catch(err=> console.log(err))

    )
}

export default ItemListContainer
