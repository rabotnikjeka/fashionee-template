import "../styles/cart.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function CartYourOrder({ isCartProducts, isDiscount }) {
  const { cart } = useContext(ProductContext);

  const orderPrice = isCartProducts.reduce((total, item) => {
    const cartItem = cart.find((c) => c.id === item.id);
    return total + item.price * (cartItem ? cartItem.quantity : 0);
  }, 0);
  const discountPrice = isDiscount ? (orderPrice * 10) / 100 : 0;
  const deliveryPrice = isCartProducts.length > 0 ? 15 : 0;
  const totalPrice = orderPrice - discountPrice + deliveryPrice;
  return (
    <div className="order">
      <div className="title">your order</div>
      <div className="order-price-wraper">
        <div className="price-row">
          <div className="name">Order price</div>
          <div className="price" data-testid="order-price">
            ${orderPrice.toFixed(2)}
          </div>
        </div>
        <div className="price-row">
          <div className="name">Discount for promo code</div>
          <div className="discount" data-testid="discount">
            {isDiscount ? "10%" : "No"}
          </div>
        </div>
        <div className="price-row delimiter">
          <div className="name">
            Delivery
            <span className="additional">(Aug 02 at 16:00)</span>
          </div>
          <div className="price" data-testid="delivery">
            ${deliveryPrice}
          </div>
        </div>
        <div className="price-row total">
          <div className="name">Total</div>
          <div className="price" data-testid="total-price">
            ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="button-line-wrapper">
        <button className="button" data-testid="checkout-btn">
          Checkout
        </button>
        <div className="button-line"></div>
      </div>
    </div>
  );
}
