import styles from "../styles/Shop.module.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Showcase = () => {
  return (
    <div className={styles.shopFill} data-testid="showcase">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Showcase;
