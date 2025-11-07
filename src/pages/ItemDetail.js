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

  // Função para lidar com a adição ao carrinho
  const handleAddToCart = () => {
    if (item) {
      addToCart(item, 1);
      // (Opcional) Você pode adicionar um feedback aqui, como "Produto adicionado!"
    }
  };

  if (loading) return <div className="container">Carregando...</div>;
  if (!item) return <div className="container">Produto não encontrado.</div>;

  return (
    <div className="container item-detail">
      {/* Layout de duas colunas (imagem e conteúdo) */}
      <div className="item-detail-layout">

        {/* Coluna da Imagem */}
        <div className="item-detail-image">
          <img
            src={encodeURI(item.image || '/img/placeholder.png')}
            alt={item.name}
            onError={(e) => { e.target.onerror = null; e.target.src = '/img/placeholder.png'; }}
          />
        </div>

        {/* Coluna do Conteúdo */}
        <div className="item-detail-content">
          <h2 className="item-detail-title">{item.name}</h2>
          
          <p className="item-detail-price">R$ {item.price.toFixed(2)}</p>
          
          <p className="item-detail-description">{item.description}</p>
          
          <p className="item-detail-stock">
            {item.stock > 0 ? `Em estoque: ${item.stock} unidades` : 'Fora de estoque'}
          </p>
          
          <div className="item-detail-actions">
            {/* Usamos a classe 'button-primary' que definimos antes */}
            <button 
              onClick={handleAddToCart} 
              className="button-primary"
              disabled={item.stock === 0}
            >
              {item.stock > 0 ? 'Adicionar ao Carrinho' : 'Indisponível'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;