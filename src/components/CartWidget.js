import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { calcItemsQty } = useContext(CartContext);
    const qty = calcItemsQty();

    if (qty === 0) return null;

    return (
        <Link to="/cart" className="cart-widget" title="Ver carrinho">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{qty}</span>
        </Link>
    );
};

export default CartWidget;