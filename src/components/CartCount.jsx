import "./main.css"
import React from 'react'

const CartCount = ({ quantity, decrementQuantity, incrementQuantity }) => {
  
  return (
  <div>
    <div className="item-count" style={{ display: 'flex', alignItems: 'center' }}>
      <button className="btnSumaResta" onClick={decrementQuantity}>-</button>
      <p className="cantidad">{quantity}</p>
      <button className="btnSumaResta" onClick={incrementQuantity}>+</button>
    </div>
  </div>
  );
}

export default CartCount;

