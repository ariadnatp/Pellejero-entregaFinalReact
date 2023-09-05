import "./main.css"
import flag from "../assets/flag.png"
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore"
import { firestore } from "../firebase/client.js";
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState()
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        const pedidosRef = collection(firestore, "pedidos");
        addDoc(pedidosRef, pedido)
        .then((doc)=> {
            setPedidoId(doc.id);
            setCarrito([]);
        })
    }
    if (pedidoId){
        return(
        <div className='estilo'>
            <img src={flag} alt="logo" />
            <h1>MUCHAS GRACIAS POR TU COMPRA!</h1>
            <Link to="/" className="btnFinalizar">Ir al Inicio</Link>
        </div>
        )
    }

    return (
    <>
    <div className='estilo'>
        <img src={flag} alt="logo"/>
        <h1>FINALIZAR COMPRA</h1>
    </div>
    <div className="container">
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <button className="btnCarrito" type="submit" onClick={vaciarCarrito}>Comprar</button>
        </form>
    </div>
    </>
    );
}

export default Checkout;