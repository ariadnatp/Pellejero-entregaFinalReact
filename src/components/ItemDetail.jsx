import React from 'react';
import  CartToggle  from './CartToggle.jsx';
import { useContext } from "react";
import { CartContext } from '../context/CartContext';


export const ItemDetail = ({selectProd})=>{
  const Cartcontext = useContext(CartContext);
    console.log(selectProd);   
    return (
    <div className="container d-flex justify-content-center align-items-center">
    <div className="row">
    <div>
    <div className="card border-light">
      <img className="card-img-top rounded mx-auto d-block" src={selectProd.foto} alt={selectProd.nombre} style={{ width: 300 }} />
      <div className="card-body">
        <h3 className="card-title">{selectProd.nombre}</h3>
        <p className="card-text text-primary">{selectProd.edicion}</p>
        <p className="card-text">$ {selectProd.precio}</p>
        <p className="card-text">Color: {selectProd.color}</p>
        <p className="card-text">Talle: {selectProd.talle}</p>
        <CartToggle/>
      </div>
    </div>
    </div>
    </div>
    </div>
  
);}
export default ItemDetail;