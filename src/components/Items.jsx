function Items(props) {
  
  return (
         <div className="card" style={{width: '25rem'}}>
                <img className="card-img-top" src={props.card.foto} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.card.title}</h5>
                    <a href="" className="btn btn-primary">Detalle del producto</a>
                </div>
          </div>
  )
};

export default Items


