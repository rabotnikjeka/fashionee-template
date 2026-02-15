import "../styles/shop.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Showcase = () => {
  return (
    <div className="shop-fill" data-testid="showcase">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Showcase;
