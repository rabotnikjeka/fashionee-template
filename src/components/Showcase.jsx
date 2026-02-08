import "../styles/shop.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Showcase = ({ products, onLike, favorites, onCart, offCart, cart }) => {
  return (
    <div className="shop-fill" data-testid="showcase">
      <LeftSide />

      <RightSide
        onLike={onLike}
        favorites={favorites}
        onCart={onCart}
        offCart={offCart}
        cart={cart}
        products={products}
      />
    </div>
  );
};

export default Showcase;
