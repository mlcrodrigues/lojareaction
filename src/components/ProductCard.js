import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart(product);
    };

    return (
        <Link to={`/item/${product.id}`} className="product-card">
            <div className="product-image">
                <img
                    src={encodeURI(product.image || '/img/placeholder.png')}
                    alt={product.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/img/placeholder.png'; }}
                />
            </div>
            
            
            <div className="product-card-content">
                <h3 className="product-title">{product.name}</h3>

                <div className="product-card-footer">
                    <p className="product-price">R$ {product.price.toFixed(2)}</p>
                    <button 
                        onClick={(e) => { 
                            e.preventDefault();
                            handleAddToCart(); 
                        }} 
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