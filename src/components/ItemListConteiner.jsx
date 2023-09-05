import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {firestore} from "../firebase/client.js";

const ItemListConteiner = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");

    const edicion = useParams().edicion;

    useEffect(() => {

      const productosRef = collection(firestore, "productos");
      const q = edicion ? query(productosRef, where("edicion", "==", edicion)) : productosRef;

      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [edicion])
    
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="card center card border-light mb-3">
              <img className="card-img-top rounded mx-auto d-block" src={producto.image} alt={producto.nombre} style={{ width: 300 }}/>
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
}

export default ItemListConteiner;

