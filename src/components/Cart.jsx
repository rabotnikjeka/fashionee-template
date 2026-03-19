import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartItem } from "./CartItem";
import "../styles/cart.css";
import { CartYourOrder } from "./CartYourOrder";
function Cart() {
  const { products, cart } = useContext(ProductContext);
  const [discountInput, setDiscountInput] = useState("");
  const [isDiscount, setIsDiscount] = useState(false);
  const isCartProducts = products.filter((item) =>
    cart.some((cartItem) => cartItem.id === item.id),
  );

  return (
    <div data-testid="cart-page" className="cart-container">
      <div className="order-wrapper">
        <div className="product-list">
          {isCartProducts.map((item) => {
            const cartItem = cart.find((c) => c.id === item.id);
            const quantity = cartItem ? cartItem.quantity : 0;
            return <CartItem key={item.id} {...item} quantity={quantity} />;
          })}
        </div>
        <CartYourOrder
          isCartProducts={isCartProducts}
          isDiscount={isDiscount}
        />
      </div>
      <div className="promo-code-wrapper">
        <div className="info">
          <div className="title">You Have A Promo Code?</div>
          <div className="description">
            To receive up-to-date promotional codes, subscribe to us on social
            networks.
          </div>
        </div>
        <div className="promo-code">
          <input
            type="text"
            name="promo-code"
            className="input"
            placeholder="Enter promo code"
            onChange={(e) => {
              setDiscountInput(e.target.value);
            }}
          />
          <div className="button-line-wrapper">
            <button
              className="button"
              onClick={() => {
                setIsDiscount(discountInput === "ilovereact" ? true : false);
              }}
            >
              <img src="/icons/arrowRight.svg" alt="" />
            </button>
            <div className="button-line"></div>
          </div>
        </div>
        <div className="find-us">
          <div className="find-us-text">Find us here:</div>
          <div className="social-links">
            <div className="social-link">
              <a href="">FB</a>
            </div>
            <div className="line"></div>
            <div className="social-link">
              <a href="">TW</a>
            </div>
            <div className="line"></div>
            <div className="social-link">
              <a href="">INS</a>
            </div>
            <div className="line"></div>
            <div className="social-link">
              <a href="">PT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
