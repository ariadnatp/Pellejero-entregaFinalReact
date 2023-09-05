import "./main.css";
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartCount from './CartCount.jsx';

export const ItemDetail = ({ selectProd }) => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const isInCart = carrito.some((producto) => producto.id === selectProd.id);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    if (isInCart) {
      eliminarDelCarrito(selectProd.id);
    } else {
      agregarAlCarrito(selectProd, quantity);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <img
            src={selectProd.image}
            alt={selectProd.nombre}
            style={{ maxWidth: '70%'}}
          />
        </div>
        <div className="col-md-6 ml-3">
          <div className="card border-light">
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
              />
              <button onClick={handleAgregarAlCarrito} className="btnCarrito">
                {isInCart ? "Eliminar del carrito" : "Agregar al carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;