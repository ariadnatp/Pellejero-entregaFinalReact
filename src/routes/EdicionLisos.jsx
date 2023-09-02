import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const EdicionLisos = () => {
  const [productos, setProductos] = useState([]);
  const [filtrarEdicion, setFiltrarEdicion] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        const spaceEdition = data.filter(producto => producto.edicion == 'Edición Lisos');
        setFiltrarEdicion(spaceEdition);
      })
      .catch((error) => console.error('Error fetching productos:', error));
  }, []);

  return (
    <div className="col-md-15 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {filtrarEdicion.map((producto) => (
        <div className="card center card border-light mb-3" key={producto.id}>
          <img className="card-img-top rounded mx-auto d-block" src={producto.foto} alt={producto.nombre} style={{ width: 300 }}/>
          <div className="card-body">
            <h3 className="card-title">{producto.nombre}</h3>
            <p className="card-text text-primary">{producto.edicion}</p>
            <Link to={`/ItemDetailContainer/${producto.id}`}>VER</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EdicionLisos;