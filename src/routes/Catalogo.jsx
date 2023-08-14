import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Producto = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error fetching productos:', error));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-6" key={producto.id}>
            <div className="card center card border-light mb-3">
              <img
                className="card-img-top rounded mx-auto d-block"
                src={producto.foto}
                alt={producto.nombre}
                style={{ width: 300 }}
              />
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
