import Cart from "./Cart";
import "../styles/cart.css";

function CartContainer({ products, cart }) {
  const isCartProducts = products.filter((item) => cart.includes(item.id));

  return (
    <div data-testid="cart-page" className="cart-container">
      <div className="order-wrapper">
        <div className="product-list">
          {isCartProducts.map((item) => {
            const cartProducts = cart.filter((id) => id === item.id).length;
            return <Cart key={item.id} {...item} cartProducts={cartProducts} />;
          })}
        </div>
        <div className="order">
          <div className="title">your order</div>
          <div className="order-price-wraper">
            <div className="price-row">
              <div className="name">Order price</div>
              <div className="price">$146.98</div>
            </div>
            <div className="price-row">
              <div className="name">Discount for promo code</div>
              <div>No</div>
            </div>
            <div className="price-row delimiter">
              <div className="name">
                Delivery
                <span className="additional">(Aug 02 at 16:00)</span>
              </div>
              <div className="price">$16</div>
            </div>
            <div className="price-row total">
              <div className="name">Total</div>
              <div className="price">$146.98</div>
            </div>
          </div>
          <div className="button-line-wrapper">
            <button className="button">Checkout</button>
            <div className="button-line"></div>
          </div>
        </div>
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
          />
          <div className="button-line-wrapper">
            <button className="button">
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

export default CartContainer;
