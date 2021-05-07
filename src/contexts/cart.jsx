import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const add = (newItem) => {
    const index = items.findIndex((i) => i.id === newItem.id);
    let newItems = [...items];

    if (index === -1) {
      newItems.push({ ...newItem, amount: itemsQuantity });
    } else {
      newItems[index].amount += itemsQuantity;
    }
    setItems(newItems);
    alert(`${newItem.name} foi adicionado ao seu pedido!`);
  };

  const remove = (itemRemove) => {
    const index = items.findIndex((i) => i.id === itemRemove.id);
    let newItems = [...items];
    if (newItems[index].amount === 1) {
      newItems.splice(index, 1);
    } else {
      newItems[index].amount -= 1;
    }
    setItems(newItems);
  };

  return (
    <CartContext.Provider
      value={{ items, add, remove, itemsQuantity, setItemsQuantity }}
    >
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
