import "../styles/shop.css";
const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  color,
  image,
  isSale,
  isNew,
  onLike,
  isFavorite,
  isOnCart,
  onCart,
  offCart,
  countOfCartId,
}) => {
  return (
    <div
      className="product-card"
      data-testid="product-card"
      data-product-id={id}
    >
      <div className="product-image">
        <div className="product-top-side">
          <div className="label">
            {isSale && <div className="sale-lable">Sale</div>}
            {isNew && <div className="new-lable">New</div>}
          </div>
          <button
            className="favorite-button"
            data-testid="favorite-btn"
            data-active={isFavorite}
            onClick={() => onLike(id)}
          >
            <img
              src="/icons/favorites.svg"
              className={isFavorite ? "favorites active" : "favorites "}
            />
          </button>
        </div>
        <img src={image} alt={name} className="image" />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price-buy-wrapper">
          {" "}
          <div className="product-price-wrapper">
            <div className="product-current-price">{price}</div>
            {oldPrice && <div className="product-old-price">{oldPrice}</div>}
          </div>
          <div className="product-buy-wrapper">
            <div className="button-line-wrapper">
              <button
                onClick={() => onCart(id)}
                className={isOnCart ? "button toBuy active" : "button toBuy"}
                data-testid="add-to-cart-btn"
              >
                Buy
              </button>
              <div className="button-line"></div>
            </div>
            <div
              className={
                countOfCartId !== 0
                  ? "add-to-cart-counter active"
                  : "add-to-cart-counter "
              }
            >
              <button
                className="decrement"
                onClick={() => offCart(id)}
                data-testid="decrease-qty-btn"
              >
                <img src="/icons/minus.svg" alt="" />
              </button>
              <div className="count" data-testid="product-quantity">
                {countOfCartId}
              </div>
              <button
                className="increment"
                onClick={() => onCart(id)}
                data-testid="increase-qty-btn"
              >
                <img src="/icons/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
