import './navbar.css'
import flag from "../assets/flag.png"
import search from "../assets/search.png"
import { CardWidget } from './CardWidget'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <div className="container-fluid">
                   <Link to="/Inicio"><img src={flag} className="FlagImg" alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to="/Inicio" className="navStyle">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Catalogo" className="navStyle">Catálogo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/EdicionSpace" className="navStyle">Edición Space</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" id="filtroNombre" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-secondary btnBuscar" id="botonNombre" type="submit"><img src={search} alt="busqueda logo" /></button>
                        </form> */}
                        <div>
                            <CardWidget/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}