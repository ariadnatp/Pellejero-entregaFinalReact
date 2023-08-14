import React, { useEffect, useState } from 'react';
// import {BrowserRouter, Link} from "react-router-dom";

export const Producto = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error fetching productos:', error));
  }, []);

  return (
    <div className="container">
        <div className="row">{productos.map(producto => (
        <div key={producto.id} className="col-md-6 mb-3">
            <div className="card border-light">
                <img className="card-img-top rounded mx-auto d-block" src={producto.foto} alt={producto.nombre} style={{ width: 300 }}/>
                <div className="card-body">
                    <h3 className="card-title">{producto.nombre}</h3>
                    <p className="card-text text-primary">{producto.edicion}</p>
                </div>
            </div>
        </div>
    ))}
  </div>
</div>
  );
};

export default ProdIndividual;