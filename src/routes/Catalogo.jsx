import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs} from "firebase/firestore";
import {firestore} from "../firebase/client.js";

export const Producto = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const productosRef = collection(firestore, "productos");
    getDocs(productosRef)
    .then((resp)=> {
      setProductos(
        resp.docs.map((doc)=> {
          return {...doc.data(), id: doc.id}
        })
      )
    })
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-6" key={producto.id}>
            <div className="card center card border-light mb-3">
              <img className="card-img-top rounded mx-auto d-block" src={producto.foto} alt={producto.nombre} style={{ width: 300 }}/>
              <div className="card-body">
                <h3 className="card-title">{producto.nombre}</h3>
                <p className="card-text text-primary">{producto.edicion}</p>
                <Link to={`/ItemDetailContainer/${producto.id}`}>VER</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Producto;
