import './components/navbar.jsx'
import './components/ItemListConteiner.jsx'
import './context/CartContext.jsx'
import  ItemListConteiner  from './components/ItemListConteiner'
import  Inicio  from './routes/Inicio.jsx'
import Checkout from './components/Checkout.jsx'
import Carrito from './components/Carrito.jsx'
import CartProvider from './context/CartContext.jsx'
import { NavBar } from './components/navbar.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx'
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
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Productos" element={<ItemListConteiner/>} />
        <Route path="/category/:edicion" element={<ItemListConteiner/>} />
        <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
