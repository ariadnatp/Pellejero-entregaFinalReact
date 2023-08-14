import React, { useEffect, useState } from 'react';
import {ItemDetail} from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => { //no llamo a prods
  const [selectProd, setSelectProd] = useState({}); //estado con el que guardaremos la información del producto
  const { productId } = useParams();

  useEffect(() => {
    fetch('/productos.json') //tengo que llamar la info mediante FETCH
    .then((response)=> response.json()) //recibimos el array de prods
    .then((productos)=> { //metodo find para encontrar producto*ID y guardarlo en constante "product"
      const product = productos.find ((producto)=> producto.id === (productId));
      setSelectProd(product); //seteamos el estado del valor anterior, puedo usar la info guardada directamente sin necesidar de rellamar nd
    })
    .catch((error)=> console.error("error fetching prods:", error));
  }, [productId]);
  console.log();
<ItemDetail/>;

  }


export default ItemDetailContainer;
