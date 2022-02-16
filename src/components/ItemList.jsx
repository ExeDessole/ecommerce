import Items from './Items'

function ItemList({productos}) {
   
    return (
        <>
        {productos.map(prod =><Items key= {prod.id} card= {prod}/>)}
        </>
    )
}

export default ItemList