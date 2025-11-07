import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../services/firestoreService';
import { CartContext } from '../context/CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let mounted = true;
    getItemById(id)
      .then(data => { if (mounted) setItem(data); })
      .catch(console.error)
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [id]);


  const handleAddToCart = () => {
    if (item) {
      addToCart(item, 1);
      setFeedbackMessage('Produto adicionado ao carrinho!'); // Mostra a mensagem
      setTimeout(() => {
        setFeedbackMessage(''); // Esconde a mensagem após 3 segundos
      }, 3000); // 3000ms = 3 segundos
    }
  };

  if (loading) return <div className="container">Carregando...</div>;
  if (!item) return <div className="container">Produto não encontrado.</div>;

  return (
    <div className="container item-detail">
      
      <div className="item-detail-layout">

        
        <div className="item-detail-image">
          <img
            src={encodeURI(item.image || 'build/img 2/placeholder.jpg')}
            alt={item.name}
            onError={(e) => { e.target.onerror = null; e.target.src = 'build/img 2/placeholder.jpg'; }}
          />
        </div>

        
        <div className="item-detail-content">
          <h2 className="item-detail-title">{item.name}</h2>
          
          <p className="item-detail-price">R$ {item.price.toFixed(2)}</p>
          
          <p className="item-detail-description">{item.description}</p>
          
          <p className="item-detail-stock">
            {item.stock > 0 ? `Em estoque: ${item.stock} unidades` : 'Fora de estoque'}
          </p>
          
          <div className="item-detail-actions">
          
            <button 
              onClick={handleAddToCart} 
              className="button-primary"
              disabled={item.stock === 0}
            >
              {item.stock > 0 ? 'Adicionar ao Carrinho' : 'Indisponível'}
            </button>
          </div>
          <p className="feedback-message">
              {feedbackMessage}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;