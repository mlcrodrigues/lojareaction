import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

const ProductCard = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart(product);
    };

    return (
        // Envolvemos o card com um Link para a página de detalhes
        <Link to={`/item/${product.id}`} className="product-card">
            <div className="product-image">
                <img
                    src={encodeURI(product.image || '/img/placeholder.png')}
                    alt={product.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/img/placeholder.png'; }}
                />
            </div>
            
            {/* O conteúdo do card foi movido para dentro de um div 
                para melhor controle do layout com flexbox */}
            <div className="product-card-content">
                <h3 className="product-title">{product.name}</h3>
                
                {/* A descrição foi removida da visualização em grade
                   para manter os cards mais limpos.
                   Ela aparecerá na página de detalhes. */}
                
                <div className="product-card-footer">
                    <p className="product-price">R$ {product.price.toFixed(2)}</p>
                    <button 
                        onClick={(e) => { 
                            e.preventDefault(); // Impede o Link de navegar
                            handleAddToCart(); 
                        }} 
                        className="button-primary" // << AQUI A MUDANÇA
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;