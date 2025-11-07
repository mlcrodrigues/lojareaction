import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => cartList.some(p => p.id === id);

    // adiciona item (evita duplicados, acumula quantidade)
    const addToCart = (item, qty = 1) => {
        setCartList(prev => {
            const existing = prev.find(p => p.id === item.id);
            if (existing) {
                return prev.map(p =>
                    p.id === item.id ? { ...p, quantity: p.quantity + qty } : p
                );
            } else {
                return [...prev, { ...item, quantity: qty }];
            }
        });
    };

    // aliases (compatibilidade com nomes sugeridos)
    const addItem = addToCart;

    // remove um item por id
    const deleteItem = (id) => {
        setCartList(prev => prev.filter(p => p.id !== id));
    };

    const removeItem = deleteItem;

    // limpa o carrinho
    const removeList = () => setCartList([]);
    const clear = removeList;

    // retorna total de itens (soma das quantidades)
    const calcItemsQty = () => cartList.reduce((acc, p) => acc + (p.quantity || 0), 0);

    // retorna valor total
    const calcTotal = () => cartList.reduce((acc, p) => acc + (p.price * (p.quantity || 0)), 0);

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            addItem,
            deleteItem,
            removeItem,
            removeList,
            clear,
            isInCart,
            calcItemsQty,
            calcTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;