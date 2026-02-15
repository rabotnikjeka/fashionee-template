import "../styles/shop.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Showcase = () => {
  const { products } = useContext(ProductContext);

  if (products.length === 0) {
    return (
      <div className="shop-fill" data-testid="showcase">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="shop-fill" data-testid="showcase">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Showcase;
