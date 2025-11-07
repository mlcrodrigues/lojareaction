import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemDetail from './pages/ItemDetail';
import CheckoutForm from './pages/CheckoutForm'; // 1. IMPORTE AQUI
import CartContextProvider from './context/CartContext';
import CartWidget from './components/CartWidget';
import './styles/main.css';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter basename="/lojareaction">
        <header className="header container">
          <Link to="/" className="logo">REACTION STORE</Link>
          <CartWidget />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<CheckoutForm />} /> {/* 2. ADICIONE A ROTA */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;