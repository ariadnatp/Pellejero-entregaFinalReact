import React, { useState, useContext } from 'react';
import carro from "../assets/carro.png"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

function CartWidget (){
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className='flexContador'>
      <Link className="btnCarrito" to="/carrito">
        <img src={carro} alt="carrito"/>
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}

export default CartWidget;

