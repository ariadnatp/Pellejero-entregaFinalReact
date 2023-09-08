import "./main.css";
import flag from "../assets/flag.png";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/client.js";
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState(null);
    const [estadoCompra, setEstadoCompra] = useState("formulario"); // Puede ser "formulario", "cargando" o "completado"
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, formState: { isValid } } = useForm({
        mode: "onChange", // Habilita la validación en tiempo real
    });

    const comprar = (data) => {
        setEstadoCompra("cargando"); // Cambia al estado "cargando" al hacer clic en "Comprar"

        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        const pedidosRef = collection(firestore, "pedidos");
        addDoc(pedidosRef, pedido)
        .then((doc)=> {
            setPedidoId(doc.id);
            setEstadoCompra("completado"); // Cambia al estado "completado" después de realizar la compra
            setCarrito([]);
        })
    }

    if (estadoCompra === "completado"){
        return(
            <div className='estilo'>
                <img src={flag} alt="logo" />
                <h1>MUCHAS GRACIAS POR TU COMPRA!</h1>
                {/* Agregar el ID del pedido aquí */}
                <h4>Codigo del Pedido: {pedidoId}</h4>
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
            {estadoCompra === "cargando" ? (
                <h2 className="cargando">Cargando...</h2>
            ) : (
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre", { required: true })} />
                    <input type="email" placeholder="Ingresá tu e-mail" {...register("email", { required: true })} />
                    <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono", { required: true })} />
                    <button className="btnCarrito" type="submit" onClick={vaciarCarrito} disabled={!isValid}>Comprar</button>
                </form>
            )}
        </div>
        </>
    );
}

export default Checkout;
