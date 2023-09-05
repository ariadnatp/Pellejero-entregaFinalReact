import { createContext, useState } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto, quantity) => {
    const prodAgregado = {...producto, quantity};
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto)=> producto.id === prodAgregado.id);
    if(estaEnElCarrito){
     estaEnElCarrito.quantity += quantity;
     setCarrito(nuevoCarrito);
    }else{
      nuevoCarrito.push(prodAgregado);
    }
    setCarrito(nuevoCarrito);
  }

  const eliminarDelCarrito = (productoId) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
    setCarrito(nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.quantity, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.quantity, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  return(
  <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarDelCarrito}}>
    {children}
  </CartContext.Provider>
  );
}

export default CartProvider;