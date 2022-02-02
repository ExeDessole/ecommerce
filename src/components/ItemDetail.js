
function ItemDetail(prod) {

  return(
    <div classname="card" style="width: 50rem;">
        <div classname="card-body">
                <img classname="card-img-top" src={prod.foto} alt="Card image cap"/>
                <h5 classname="card-title">{prod.title}</h5>
                <h6 classname="card-subtitle mb-2 text-muted">{prod.precio}</h6>
                <p classname="card-text">{prod.text}</p>
                <a href="#" classname="card-link">Card link</a>
                <a href="#" classname="card-link">Another link</a>
        </div>
    </div>
  )
}

export default ItemDetail;







