import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from './CartContext';
import { getItems } from '../services/firestoreService';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getItems()
      .then(items => { if (mounted) setProducts(items); })
      .catch(err => { console.error('Erro ao buscar itens:', err); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="container">Carregando produtos...</div>;

  return (
    <div className="home">
      <h1>REACTION STORE</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product, 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;