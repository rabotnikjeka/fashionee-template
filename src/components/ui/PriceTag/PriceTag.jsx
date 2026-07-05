import styles from "./PriceTag.module.css";

const PriceTag = ({ price, oldPrice }) => {
  return (
    <>
      <div className={styles.productCurrentPrice}>${price}</div>
      {oldPrice && <div className={styles.productOldPrice}>${oldPrice}</div>}
    </>
  );
};

export default PriceTag;
