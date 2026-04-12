import styles from "../styles/Cart.module.css";
import buttonStyles from "../styles/Button.module.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function CartYourOrder({
  isCartProducts,
  isDiscount,
  discountInput,
  cartItems,
}) {
  const { cart } = useContext(ProductContext);

  const orderPrice = isCartProducts.reduce((total, item) => {
    const cartItem = cart.find((c) => c.id === item.id);
    return total + item.price * (cartItem ? cartItem.quantity : 0);
  }, 0);
  const discount = discountInput === "ilovereact" ? 0.1 : 0;
  const discountPrice = isDiscount ? orderPrice * discount : 0;
  const deliveryPrice = isCartProducts.length > 0 ? 15 : 0;
  const totalPrice = orderPrice - discountPrice + deliveryPrice;

  const yourOrder = {
    items: cartItems,
    promoCode: discountInput,
    discount: discount,
    deliveryPrice: deliveryPrice,
    finalPrice: totalPrice.toFixed(2),
  };

  return (
    <div className={styles.order}>
      <div className={styles.orderTitle}>your order</div>
      <div className={styles.orderPriceWraper}>
        <div className={styles.priceRow}>
          <div className={styles.name}>Order price</div>
          <div className={styles.price} data-testid="order-price">
            {orderPrice.toFixed(2)}
          </div>
        </div>
        <div className={styles.priceRow}>
          <div className={styles.name}>Discount for promo code</div>
          <div className={styles.discount} data-testid="discount">
            {isDiscount ? "10%" : "No"}
          </div>
        </div>
        <div className={`${styles.priceRow} ${styles.delimiter}`}>
          <div className={styles.name}>
            Delivery
            <span className={styles.additional}>(Aug 02 at 16:00)</span>
          </div>
          <div className={styles.price} data-testid="delivery">
            ${deliveryPrice}
          </div>
        </div>
        <div className={`${styles.priceRow} ${styles.total}`}>
          <div className={styles.name}>Total</div>

          <div className={styles.price} data-testid="total-price">
            {totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
      <div
        className={`${buttonStyles.buttonLineWrapper} ${styles.buttonLineWrapper}`}
      >
        <button
          className={`${buttonStyles.button} ${styles.button}`}
          data-testid="checkout-btn"
          onClick={() => {
            console.log("Your order: ", { yourOrder });
          }}
        >
          Checkout
        </button>
        <div className={buttonStyles.buttonLine}></div>
      </div>
    </div>
  );
}
