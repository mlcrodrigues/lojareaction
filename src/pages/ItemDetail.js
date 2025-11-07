import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getItemById } from '../services/firestoreService';
import { CartContext } from '../context/CartContext';
import ItemCount from '../components/ItemCount';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    getItemById(id)
      .then(data => { if (mounted) setItem(data); })
      .catch(console.error)
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [id]);

  const handleOnAdd = (quantity) => {
    if (item) {
      addToCart(item, quantity);
      setIsAdded(true);
      
   
      setFeedbackMessage(`Você adicionou ${quantity} "${item.name}" ao carrinho!`);
      setTimeout(() => setFeedbackMessage(''), 4000);
    }
  };

  if (loading) return <div className="container">Carregando...</div>;
  if (!item) return <div className="container">Produto não encontrado.</div>;

  return (
    <div className="container item-detail">
      <div className="item-detail-layout">

        <div className="item-detail-image">
          <img
            src={encodeURI(process.env.PUBLIC_URL + (item.image || '/img/placeholder.png'))}
            alt={item.name}
            onError={(e) => { e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/img/placeholder.png'; }}
          />
        </div>

        <div className="item-detail-content">
          <h2 className="item-detail-title">{item.name}</h2>
          <p className="item-detail-price">R$ {item.price.toFixed(2)}</p>
          <p className="item-detail-description">{item.description}</p>
          
       
          <div className="item-detail-actions">
            {isAdded ? (
           
              <Link to="/cart" className="button-primary">
                Terminar Compra (Ir ao Carrinho)
              </Link>
            ) : (
         
              <ItemCount 
                stock={item.stock}
                onAdd={handleOnAdd}
              />
            )}
          </div>

          {feedbackMessage && (
            <p className="feedback-message">
              {feedbackMessage}
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;