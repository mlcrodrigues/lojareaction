import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product);

  // monta o caminho considerando PUBLIC_URL (gh-pages) e trata espaços/acentos
  const imgPath = product.image || '/img/placeholder.png';
  const src = encodeURI(`${process.env.PUBLIC_URL}${imgPath.startsWith('/') ? '' : '/'}${imgPath}`);

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={src}
          alt={product.name}
          onError={(e) => { e.target.onerror = null; e.target.src = `${process.env.PUBLIC_URL}/img/placeholder.jpg`; }}
        />
      </div>
      <h3>{product.name}</h3>
      <p>R$ {product.price?.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;