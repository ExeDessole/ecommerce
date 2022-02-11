
function ItemDetail({prod}) {
console.log(prod)
  return(
    <div className="card" style={{width: '50rem'}}>
        <div className="card-body">
                <img className="card-img-top" src={prod.foto} alt="Card image cap"/>
                <h5 className="card-title">{prod.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{prod.precio}</h6>
                <p className="card-text">{prod.text}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
        </div>
    </div>
  )
}

export default ItemDetail;







