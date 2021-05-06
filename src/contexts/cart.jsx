import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const add = (item) => {
    setItems([...items, item])
  };

  const remove = (id) => {
    const newList = items.filter((item) => item.id !== id)
    setItems(newList)

  };

  return (
    <CartContext.Provider value={{ items, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};

// const cart = useContext(CartContext)

// cria o context e export
// cria o component com o provider e as operacoes export ele

// objecto para usar
// cart.items = retorna todos os items
// cart.add(item) = adicionar novo item
// cart.remove(item) = remove o item
