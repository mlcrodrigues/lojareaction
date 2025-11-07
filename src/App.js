import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemDetail from './pages/ItemDetail'; // <-- 1. IMPORTE O ITEMDETAIL
import CartContextProvider from './context/CartContext';
import CartWidget from './components/CartWidget';
import './styles/main.css';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="header container">
          <Link to="/" className="logo">REACTION STORE</Link>
          <CartWidget />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* 2. ADICIONE ESTA NOVA ROTA: */}
          <Route path="/item/:id" element={<ItemDetail />} /> 
        </Routes>
        
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;