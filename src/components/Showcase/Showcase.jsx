import styles from "./Showcase.module.css";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const Showcase = () => {
  return (
    <div className={styles.shopFill} data-testid="showcase">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Showcase;
