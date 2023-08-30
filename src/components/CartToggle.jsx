import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function CartToggle() {
  const Cartcontext = useContext (CartContext);
  // console.log({ favsContext });
  const [isCart, setIsCart] = useState(false);

  const handleClick = () => {
    if(isCart){
      Cartcontext.decrementCartQuantity();
      setIsCart (!isCart);
    }else{
      setIsCart (!isCart);
      Cartcontext.incrementCartQuantity()
    }
  };

  return (
    <span>
      <vutton className="btn btn-outline-primary btnCarrito" onClick={handleClick}>
        {isCart ? "Eliminar de carrito" : "Agregar a carrito"}
      </vutton>
    </span>
  );
}

export default CartToggle;