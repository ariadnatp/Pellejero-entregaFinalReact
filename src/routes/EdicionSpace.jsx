
export const Edicion = () => {
    useEffect(() => {
      fetch('/productos.json')
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .catch((error) => console.error('Error fetching productos:', error));
    }, []);

    const FiltrarEdicion = () => {
        const spaceEdition = productos.filter(producto => producto.edicion === 'edición space');
        setFiltrarEdicion(spaceEdition);
      };

    return (
      <div>
        {FiltrarEdicion.map((producto) => {
          return (
            <div className="card col-md-4 center card border-light mb-3" key={producto.id}>
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
          );
        })}
      </div>
    );
  };
  




export default filtrarPorEdicion;