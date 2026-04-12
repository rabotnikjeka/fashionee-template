import styles from "../styles/Cart.module.css";
import priceStyles from "../styles/Price.module.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function CartItem({ id, name, price, oldPrice, image, quantity }) {
  const { addCart, removeCart, removeFromCart } = useContext(ProductContext);
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <div
      className={styles.cartProduct}
      data-testid="cart-item"
      data-name={name}
      data-price={price}
    >
      <div className={styles.photo}>
        <img src={image} alt={name} className={styles.cartImage} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.priceWrapper}>
          <div className={styles.priceAndQuantity}>
            <div className={priceStyles.productCurrentPrice}>${price}</div>
            {oldPrice && (
              <div className={priceStyles.productOldPrice}>${oldPrice}</div>
            )}
            <div className={styles.quantity}>
              <button
                className={styles.countButton}
                data-testid="decrease-cart-btn"
                onClick={() => removeCart(id)}
              >
                -
              </button>
              <div className={styles.count}>{quantity}</div>
              <button
                className={styles.countButton}
                data-testid="increase-cart-btn"
                onClick={() => addCart(id)}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.totalPrice}>${totalPrice}</div>
        </div>
        <button
          className={styles.close}
          data-testid="remove-from-cart-btn"
          onClick={() => removeFromCart(id)}
        >
          <img src="/icons/close.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
