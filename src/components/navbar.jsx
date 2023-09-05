import "./main.css"
import flag from "../assets/flag.png"
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
    <>
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/"><img src={flag} className="FlagImg" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to="/" className="navStyle">Inicio</Link></li>
                        <li className="nav-item"><Link to="/Productos" className="navStyle">Nuestros Productos</Link></li>
                        <li className="nav-item"><Link to="/category/Edicion Space" className="navStyle">Edición Space</Link></li>
                        <li className="nav-item"><Link to="/category/Edicion Lisos" className="navStyle">Edición Lisos</Link></li>
                    </ul>
                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    </>
    );
}

export default NavBar;
