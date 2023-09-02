import "./main.css"
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import  CartCount from './CartCount.jsx'

export const ItemDetail = ({ selectProd }) => {
  const {carrito, agregarAlCarrito} = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div>
          <div className="card border-light">
            <img
              className="card-img-top rounded mx-auto d-block"
              src={selectProd.image}
              alt={selectProd.nombre}
              style={{ width: 300 }}
            />
            <div className="card-body">
              <h3 className="card-title">{selectProd.nombre}</h3>
              <p className="card-text text-primary">{selectProd.edicion}</p>
              <p className="card-text">$ {selectProd.precio}</p>
              <p className="card-text">Color: {selectProd.color}</p>
              <p className="card-text">Talle: {selectProd.talle}</p>
              <CartCount
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              agregarAlCarrito={()=> {agregarAlCarrito(selectProd, quantity)}}
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
