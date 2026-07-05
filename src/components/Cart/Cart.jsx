import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import styles from "./Cart.module.css";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import SocialLinks from "../ui/SocialLinks/SocialLinks";
import { CartYourOrder } from "../CartYourOrder/CartYourOrder";
import CartList from "../CartList/CartList";
import { PROMO_CODE } from "../../constants";

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
          <Input
            data-testid="promo-code-input"
            type="text"
            name="promo-code"
            placeholder="Enter promo code"
            onChange={(e) => {
              setDiscountInput(e.target.value);
            }}
          />
          <Button
            wrapperClassName={styles.promoButtonWrapper}
            className={styles.promoButton}
            data-testid="apply-promo-btn"
            onClick={() => {
              setIsDiscount(discountInput === PROMO_CODE);
            }}
          >
            <img src="/icons/arrowRight.svg" alt="" />
          </Button>
        </div>
        <SocialLinks
          className={styles.findUs}
          socialLinksClassName={styles.socialLinks}
        />
      </div>
    </div>
  );
}

export default Cart;
