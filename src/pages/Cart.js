import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartList, deleteItem, removeList, calcTotal } = useContext(CartContext);

    if (cartList.length === 0) {
        return (
            <div className="container cart-empty">
                <h2>Seu carrinho está vazio</h2>
                <Link to="/" className="button-primary">Voltar ao catálogo</Link>
            </div>
        );
    }

    return (
        <div className="container cart-page">
            <h2>Detalhes do Carrinho</h2>
            
            <ul className="cart-list">
                {cartList.map(item => (
                    <li key={item.id} className="cart-item">
                        <div className="cart-row">
                            <div className="product-image">
                                <img
                                    src={encodeURI(item.image || '/img/placeholder.png')}
                                    alt={item.name}
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/img/placeholder.png'; }}
                                />
                            </div>

                            <div className="item-details">
                                <div><strong>{item.name}</strong></div>
                                <div>Quantidade: {item.quantity}</div>
                                <div>Preço unitário: R$ {item.price.toFixed(2)}</div>
                                <div>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</div>
                            </div>

                            <div className="item-actions">
                                <button onClick={() => deleteItem(item.id)} className="button-remove">Remover</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="cart-summary">
                <h3>Total do pedido: R$ {calcTotal().toFixed(2)}</h3>
                <button onClick={removeList} className="button-secondary">Limpar carrinho</button>
                <button className="button-primary">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Cart;