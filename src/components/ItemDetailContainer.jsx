import React, { useEffect, useState } from 'react';
import {ItemDetail} from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import {doc, getDoc, collection} from "firebase/firestore";
import {firestore} from "../firebase/client.js";

export const ItemDetailContainer = () => { //no llamo a prods
  const [selectProd, setSelectProd] = useState({}); //estado con el que guardaremos la información del producto
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(firestore, "productos", id);
    getDoc(docRef)
    .then((resp)=> {
      setSelectProd(
        {...resp.data(), id: resp.id}
      )
    })
    .catch((error)=> console.log(error))
  }, [id]);

  return ( 
  <ItemDetail selectProd={selectProd}/>);
  }


export default ItemDetailContainer;
