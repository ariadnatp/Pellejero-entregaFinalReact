import './App.css'
import './components/navbar.jsx'
import './components/ItemListConteiner.jsx'
import './context/CartContext.jsx'
import {Producto} from "./routes/Catalogo.jsx"
import { NavBar } from './components/navbar.jsx'
import {Edicion} from './routes/EdicionSpace.jsx'
import { ItemListContainer } from './components/ItemListConteiner'
import {ItemDetailContainer} from './components/ItemDetailContainer.jsx'
import CartProvider, {CartContext} from './context/CartContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useContext, createContext, useEffect } from 'react'
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
    <CartProvider value={{}}> 
    {/* creo un objeto dentro de "value={}" para poder pasarle varios valores y no solo uno */}
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/Catalogo" element={<Producto/>} />
        <Route path="/EdicionSpace" element={<Edicion/>} />
        <Route path="/ItemDetailContainer/:productId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}
export default App;
