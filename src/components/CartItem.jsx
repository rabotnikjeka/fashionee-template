import "../styles/cart.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
export function CartItem({ id, name, price, oldPrice, image, quantity }) {
  const { addCart, removeCart, removeFromCart } = useContext(ProductContext);
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <div
      className="cart-product"
      data-testid="cart-item"
      data-name={name}
      data-price={price}
    >
      <div className="photo">
        <img src={image} alt={name} className="cart-image" />
      </div>
      <div className="product-info">
        <div className="title">{name}</div>
        <div className="price-wrapper">
          <div className="price-and-quantity">
            <div className="product-current-price">${price}</div>
            {oldPrice && <div className="product-old-price">${oldPrice}</div>}
            <div className="quantity">
              <button
                className="count-button"
                data-testid="decrease-cart-btn"
                onClick={() => removeCart(id)}
              >
                -
              </button>
              <div className="count">{quantity}</div>
              <button
                className="count-button"
                data-testid="increase-cart-btn"
                onClick={() => addCart(id)}
              >
                +
              </button>
            </div>
          </div>
          <div className="total-price">${totalPrice}</div>
        </div>
        <button
          className="close"
          data-testid="remove-from-cart-btn"
          onClick={() => removeFromCart(id)}
        >
          <img src="/icons/close.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
