import React, { useState } from 'react';

// stock: O estoque máximo do produto (vem do Firestore)
// onAdd: A função que será chamada quando o usuário adicionar ao carrinho
const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1); // Começa em 1 por padrão

  // Função para incrementar, respeitando o estoque
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Função para decrementar, respeitando o mínimo (1)
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Trava os botões se o estoque for 0
  if (stock === 0) {
    return (
      <div className="item-count-container">
        <p className="item-detail-stock">Sem estoque</p>
        <button className="button-primary" disabled>Adicionar ao Carrinho</button>
      </div>
    );
  }

  return (
    <div className="item-count-container">
      <div className="item-counter">
        <button onClick={decrement} className="counter-button">-</button>
        <span className="counter-value">{count}</span>
        <button onClick={increment} className="counter-button">+</button>
      </div>
      <button onClick={() => onAdd(count)} className="button-primary">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;