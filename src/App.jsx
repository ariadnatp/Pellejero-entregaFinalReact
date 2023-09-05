import './components/navbar.jsx'
import './components/ItemListConteiner.jsx'
import './context/CartContext.jsx'
import {Producto} from "./routes/Catalogo.jsx"
import { NavBar } from './components/navbar.jsx'
import {EdicionSpace} from './routes/EdicionSpace.jsx'
import {EdicionLisos} from './routes/EdicionLisos.jsx'
import  ItemListConteiner  from './components/ItemListConteiner'
import {ItemDetailContainer} from './components/ItemDetailContainer.jsx'
import Checkout from './components/Checkout.jsx'
import Carrito from './components/Carrito.jsx'
import CartProvider from './context/CartContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from './firebase/client.js'

function App() {
  useEffect (()=>{
   const collectionRef = collection(firestore, "items");
   getDocs(collectionRef).then(snapshot => {
    console.log({snapshot})
    snapshot.forEach()
   })
  }, []);

  return (
    <>
    {/* envuelvo toda mi app en el contexto de CartContext, con PROVIDER proveo a todos los componentes (que estan dentro de esta etiqueta) con nel valor de "value=" */}
    <CartProvider> 
    {/* creo un objeto dentro de "value={}" para poder pasarle varios valores y no solo uno */}
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListConteiner/>} />
        <Route path="/Catalogo" element={<Producto/>} />
        <Route path="/EdicionSpace" element={<EdicionSpace/>} />
        <Route path="/EdicionLisos" element={<EdicionLisos/>} />
        <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}
export default App;
