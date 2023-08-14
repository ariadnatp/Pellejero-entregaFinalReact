import React from 'react';
export const ItemDetail = ({selectProd})=>{
  console.log(selectProd);
    return (
    <div className="container">
    <div className="row">
    <div className="col-md-6 mb-3">
    <div className="card border-light">
      <img className="card-img-top rounded mx-auto d-block" src={selectProd.foto} alt={selectProd.nombre} style={{ width: 300 }} />
      <div className="card-body">
        <h3 className="card-title">{selectProd.nombre}</h3>
        <p className="card-text text-primary">{selectProd.edicion}</p>
        <p className="card-text">$ {selectProd.precio}</p>
        <p className="card-text">Color: {selectProd.color}</p>
        <p className="card-text">Talle: {selectProd.talle}</p>
      </div>
    </div>
    </div>
</div>
</div>
);}
export default ItemDetail;