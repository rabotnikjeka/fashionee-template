import "../styles/cart.css";
import { CartItem } from "./CartItem";
const CartList = ({ cartItems, isCartProducts }) => {
  return (
    <div className="product-list">
      {isCartProducts.length === 0 && (
        <div className="empty-cart" data-testid="cart-empty">
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
