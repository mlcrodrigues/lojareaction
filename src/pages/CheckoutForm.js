import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CheckoutForm = () => {
  const { cartList, calcTotal, clear } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  
 
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: '',
  });


  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    console.log("Dados do Comprador:", buyer);
    console.log("Itens do Carrinho:", cartList);
    console.log("Total:", calcTotal());

    setTimeout(() => {
      setLoading(false);
      setOrderId('12345-ABC-TESTE');
      clear();
    }, 2000);
  };

  if (orderId) {
    return (
      <div className="container checkout-success">
        <h2>Obrigado pela sua compra!</h2>
        <p>Seu pedido foi registrado com sucesso.</p>
        <p><strong>O ID do seu pedido é: {orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="container checkout-form-page">
      <h2>Finalizar Compra</h2>
      <p>Por favor, preencha seus dados para completar o pedido.</p>
      
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone (Whatsapp)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="button-primary" disabled={loading}>
          {loading ? 'Processando pedido...' : 'Confirmar Compra'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;