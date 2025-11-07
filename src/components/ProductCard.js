import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importe o Link

const ProductCard = ({ product, onAddToCart }) => {
    
    // 2. Criamos o caminho correto para a imagem
    const imageUrl = process.env.PUBLIC_URL + (product.image || '/img/placeholder.png');
    const placeholderUrl = process.env.PUBLIC_URL + '/img/placeholder.png';

    const handleAddToCart = (e) => {
        // 3. Impedimos que o Link seja acionado ao clicar no botão
        e.preventDefault(); 
        onAddToCart(product);
    };

    return (
        <Link to={`/item/${product.id}`} className="product-card">
            <div className="product-image">
                <img
                    src={encodeURI(imageUrl)}
                    alt={product.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = placeholderUrl; }}
                />
            </div>
            
            <div className="product-card-content">
                <h3 className="product-title">{product.name}</h3>
                
                <div className="product-card-footer">
                    <p className="product-price">R$ {product.price.toFixed(2)}</p>
                    <button 
                        onClick={handleAddToCart}
                        className="button-primary"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;