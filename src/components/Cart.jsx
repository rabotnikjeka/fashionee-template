import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import styles from "../styles/Cart.module.css";
import inputStyles from "../styles/Input.module.css";
import buttonStyles from "../styles/Button.module.css";
import socialStyles from "../styles/SocialLinks.module.css";
import { CartYourOrder } from "./CartYourOrder";
import CartList from "./CartList";

function Cart() {
  const { products, cart } = useContext(ProductContext);
  const [discountInput, setDiscountInput] = useState("");
  const [isDiscount, setIsDiscount] = useState(false);
  const isCartProducts = products.filter((item) =>
    cart.some((cartItem) => cartItem.id === item.id),
  );

  const cartItems = isCartProducts.map((item) => {
    const cartItem = cart.find((c) => c.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    return {
      id: item.id,
      name: item.name,
      quantity: quantity,
      price: item.price,
      totalPrice: quantity * item.price,
    };
  });

  return (
    <div data-testid="cart-page" className={styles.cartContainer}>
      <div className={styles.orderWrapper}>
        <CartList cartItems={cartItems} isCartProducts={isCartProducts} />
        <CartYourOrder
          isCartProducts={isCartProducts}
          isDiscount={isDiscount}
          discountInput={discountInput}
          cartItems={cartItems}
        />
      </div>
      <div className={styles.promoCodeWrapper}>
        <div className={styles.info}>
          <div className={styles.infoTitle}>You Have A Promo Code?</div>
          <div className={styles.description}>
            To receive up-to-date promotional codes, subscribe to us on social
            networks.
          </div>
        </div>
        <div className={styles.promoCode}>
          <input
            data-testid="promo-code-input"
            type="text"
            name="promo-code"
            className={inputStyles.input}
            placeholder="Enter promo code"
            onChange={(e) => {
              setDiscountInput(e.target.value);
            }}
          />
          <div className={buttonStyles.buttonLineWrapper}>
            <button
              data-testid="apply-promo-btn"
              className={buttonStyles.button}
              onClick={() => {
                setIsDiscount(discountInput === "ilovereact" ? true : false);
              }}
            >
              <img src="/icons/arrowRight.svg" alt="" />
            </button>
            <div className={buttonStyles.buttonLine}></div>
          </div>
        </div>
        <div className={`${socialStyles.findUs} ${styles.findUs}`}>
          <div className={socialStyles.findUsText}>Find us here:</div>
          <div className={`${socialStyles.socialLinks} ${styles.socialLinks}`}>
            <div className={socialStyles.socialLink}>
              <a href="">FB</a>
            </div>
            <div className={socialStyles.line}></div>
            <div className={socialStyles.socialLink}>
              <a href="">TW</a>
            </div>
            <div className={socialStyles.line}></div>
            <div className={socialStyles.socialLink}>
              <a href="">INS</a>
            </div>
            <div className={socialStyles.line}></div>
            <div className={socialStyles.socialLink}>
              <a href="">PT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
