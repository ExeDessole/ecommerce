
function ItemDetail({prod}) {

  return(
    <div class="card" style="width: 50rem;">
        <div class="card-body">
                <img class="card-img-top" src={prod.foto} alt="Card image cap"/>
                <h5 class="card-title">{prod.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{prod.precio}</h6>
                <p class="card-text">{prod.text}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
        </div>
    </div>
  )
}

export default ItemDetail;







