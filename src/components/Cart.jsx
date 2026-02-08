import "../styles/cart.css";
const Cart = ({ name, price, oldPrice, image }) => {
  return (
    <div className="cart-product" data-testid="cart-page">
      <div className="photo">
        <img src={image} alt={name} className="cart-image" />
      </div>
      <div className="product-info">
        <div className="title">{name}</div>
        <div className="price-wrapper">
          <div className="price-and-quantity">
            <div className="current-price">{price}</div>
            <div className="old-price">{oldPrice}</div>
            <div className="quantity">
              <div className="count-button">-</div>
              <div className="count">1</div>
              <div className="count-button">+</div>
            </div>
          </div>
          <div className="total-price">$35.99</div>
        </div>
        <div className="close">
          <img src="./icons/close.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
