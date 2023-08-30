import React, { useState, useContext } from 'react';
import carro from "../assets/carro.png"
import { CartContext } from '../context/CartContext';
import './CardWidget.css';


function CartWidget(){
  const Cartcontext = useContext (CartContext)

  return (
    <div className='flexContador'>      
    <badge className="btnCarrito" id="carritoBtn"><img src={carro} alt="carrito"/>{Cartcontext.CartQuantity}</badge>
    </div>
  );
}

export default CartWidget;

