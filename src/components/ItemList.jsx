import Items from './Items'

function ItemList({productos}) {
   
    return (
        <>
        {productos.map(productos =><Items key= {productos.id} card= {productos}/>)}
        </>
    )
}

export default ItemList