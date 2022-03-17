import "./cart-icon.scss";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpened, setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpened);
  const { cartCount } = useContext(CartContext);
  return (
    <div onClick={toggleCart} className="cart-icon-container">
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
