
import {llamado} from './ItemDetail'

function ItemDetailContainer() {
    return (

        llamado.then(resp=> {
            return{...resp,id:1}
        })
        .then(resp=> console.log(resp))
        .catch(err=> console.log(err))

    )
}

export default ItemDetailContainer
