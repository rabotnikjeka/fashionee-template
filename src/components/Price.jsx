import styles from "../styles/Shop.module.css";
import inputStyles from "../styles/Input.module.css";

const Price = ({
  priceMin,
  priceMax,
  defaultMin,
  defaultMax,
  onChangeMin,
  onChangeMax,
}) => {
  return (
    <div className={styles.asideParameters}>
      <div className={styles.parametersTitle}>Price</div>
      <div className={styles.parametersComponents}>
        <div className={styles.priceBar}>
          <input
            type="text"
            placeholder={String(defaultMin)}
            className={inputStyles.input}
            data-testid="price-min-input"
            value={priceMin}
            onChange={(e) => onChangeMin(e.target.value)}
          />
          <input
            type="text"
            placeholder={String(defaultMax)}
            className={inputStyles.input}
            data-testid="price-max-input"
            value={priceMax}
            onChange={(e) => onChangeMax(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Price;
