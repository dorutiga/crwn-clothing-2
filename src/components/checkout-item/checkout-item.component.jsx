import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.scss";

const CheckoutItem = ({ product }) => {
  const { imageUrl, price, quantity, name } = product;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemsHandler = () => clearItemFromCart(product);
  const addItemHandler = () => addItemToCart(product);
  const removeItemHandler = () => removeItemToCart(product);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemsHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
