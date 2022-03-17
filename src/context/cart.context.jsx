import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpened: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpened, setIsCartOpen] = useState(false);
  const value = { isCartOpened, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
