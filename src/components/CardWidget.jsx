import React, { useState } from 'react';
import carro from "../assets/carro.png"
import './CardWidget.css';
let contadorInicial = 0;

export const CardWidget = () => {
  const [contador, setContador] = useState(contadorInicial);
  const handleIncrementorContador = () => {
    setContador(contador + 1);
  };
  const borrar = () => {
    contadorInicial ("");
  }
  return (
    <div className='flexContador'>      
    <button onClick={handleIncrementorContador} className="btn btn-outline-secondary btnCarrito" id="carritoBtn"><img src={carro} alt="carrito"/>{contador}</button>
    </div>
  );
};
