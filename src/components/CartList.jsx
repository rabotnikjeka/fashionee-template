import "../styles/cart.css";
import { CartItem } from "./CartItem";
const CartList = ({ cartItems }) => {
  return (
    <div className="product-list">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default CartList;
