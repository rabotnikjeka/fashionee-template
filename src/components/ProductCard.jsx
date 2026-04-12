import styles from "../styles/ProductCard.module.css";
import priceStyles from "../styles/Price.module.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  image,
  isSale,
  isNew,
  categories,
  color,
}) => {
  const { addFavorites, favorites, addCart, removeCart, cart } =
    useContext(ProductContext);
  const isFavorite = favorites.includes(id);
  const isOnCart = cart.some((cartItem) => cartItem.id === id);
  const countOfCartId = cart.find((cartItem) => cartItem.id === id)?.quantity;

  return (
    <div
      className={styles.productCard}
      data-testid="product-card"
      data-product-id={id}
      data-name={name}
      data-categories={categories ? categories.join(",").toLowerCase() : ""}
      data-color={color ? color.toLowerCase() : ""}
      data-price={price}
    >
      <div className={styles.productImage}>
        <div className={styles.productTopSide}>
          <div className={styles.label}>
            {isSale && <div className={styles.saleLable}>Sale</div>}
            {isNew && <div className={styles.newLable}>New</div>}
          </div>
          <button
            className={styles.favoriteButton}
            data-testid="favorite-btn"
            data-active={isFavorite}
            onClick={() => addFavorites(id)}
          >
            <img
              src="/icons/favorites.svg"
              className={
                isFavorite
                  ? `${styles.favorites} ${styles.active}`
                  : styles.favorites
              }
              alt="favorite"
            />
          </button>
        </div>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPriceBuyWrapper}>
          <div className={styles.productPriceWrapper}>
            <div className={priceStyles.productCurrentPrice}>${price}</div>
            {oldPrice && (
              <div className={priceStyles.productOldPrice}>${oldPrice}</div>
            )}
          </div>
          <div className={styles.productBuyWrapper}>
            <div
              className={
                isOnCart
                  ? `${styles.buyButtonWrapper} ${styles.hidden}`
                  : styles.buyButtonWrapper
              }
            >
              <button
                onClick={() => addCart(id)}
                className={styles.buyButton}
                data-testid="add-to-cart-btn"
              >
                Buy
              </button>
              <div className={styles.buyButtonLine}></div>
            </div>
            <div
              className={
                countOfCartId
                  ? `${styles.addToCartCounter} ${styles.active}`
                  : styles.addToCartCounter
              }
            >
              <button
                className={styles.decrement}
                onClick={() => removeCart(id)}
                data-testid="decrease-qty-btn"
              >
                <img src="/icons/minus.svg" alt="decrease" />
              </button>
              <div className={styles.count} data-testid="product-quantity">
                {countOfCartId}
              </div>
              <button
                className={styles.increment}
                onClick={() => addCart(id)}
                data-testid="increase-qty-btn"
              >
                <img src="/icons/plus.svg" alt="increase" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
