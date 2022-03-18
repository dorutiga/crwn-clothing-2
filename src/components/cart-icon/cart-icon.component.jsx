import "./cart-icon.jsx";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconComponent, ItemCount, ShoppingIcon } from "./cart-icon.jsx";

const CartIcon = () => {
  const { isCartOpened, setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpened);
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconComponent onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconComponent>
  );
};
export default CartIcon;
