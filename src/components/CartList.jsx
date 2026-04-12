import styles from "../styles/Cart.module.css";
import { CartItem } from "./CartItem";

const CartList = ({ cartItems, isCartProducts }) => {
  return (
    <div className={styles.productList}>
      {isCartProducts.length === 0 && (
        <div className={styles.emptyCart} data-testid="cart-empty">
          Корзина пуста
        </div>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default CartList;
