import React, { useContext } from 'react';
import "./main.css"
import flag from "../assets/flag.png"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };
  
  return (
  <>
  <img className="imgCarrito" src={flag} alt="logo"/>
  <div className="container">
    <h1 className="fontFamily">Carrito de Compras</h1>
    {carrito.length > 0 ? (carrito.map((producto) => (
    <div key={producto.id}>
      <br/>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <p>Cantidad: {producto.quantity}</p>
      <br/>
    </div>
    ))) : (<h2 className="fontFamily">El carrito está vacío</h2>)
    }
    {carrito.length > 0 && (
    <>
    <h2 className="precioTotal">Precio Total: ${precioTotal()}</h2>
    <button onClick={handleVaciar} className="btnVaciar">Vaciar Carrito</button>
    <Link to="/Checkout" className="btnFinalizar">Finalizar Compra</Link>
    </>
    )}
  </div>
  </>
  );
};

export default Carrito;



