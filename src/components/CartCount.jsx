import "./main.css"
import React from 'react'
const CartCount = ( {quantity, decrementQuantity, incrementQuantity, agregarAlCarrito, eliminarDelCarrito} ) => {
  // const [enCarrito, setEnCarrito] = useState(false);
  return (
    <div>

        <div className="item-count" style={{ display: 'flex', alignItems: 'center' }}>
            <button className="btnSumaResta" onClick={decrementQuantity}>-</button>
            <p className="cantidad">{quantity}</p>
            <button className="btnSumaResta" onClick={incrementQuantity}>+</button>
        </div>
        {/* <button className="btnCarrito" onClick={agregarAlCarrito}>{enCarrito ? 'Eliminar del carrito' : 'Agregar al carrito'}</button> */}
    </div>
  )
}

export default CartCount;

