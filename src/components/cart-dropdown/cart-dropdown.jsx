import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selectors";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
    // setIsCartOpen(false);
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
