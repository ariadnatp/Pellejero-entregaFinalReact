import './App.css'
import './components/navbar.jsx'
import './components/ItemListConteiner.jsx'
import flag from "./assets/flag.png"
import {Producto} from "./routes/Catalogo.jsx"
import { NavBar } from './components/navbar.jsx'
import {Edicion} from './routes/EdicionSpace.jsx'
import { ItemListContainer } from './components/ItemListConteiner'
import {ItemDetailContainer} from './routes/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <div className='estilo'>
        <img src={flag} alt="logo" />
        <h1>KIRIBATI</h1>
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/Catalogo" element={<Producto/>} />
        <Route path="/EdicionSpace" element={<Edicion/>} />
        <Route path="/ItemDetailContainer/:productId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
