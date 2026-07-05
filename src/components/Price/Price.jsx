import styles from "./Price.module.css";
import Input from "../ui/Input/Input";

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
          <Input
            type="text"
            placeholder={String(defaultMin)}
            data-testid="price-min-input"
            value={priceMin}
            onChange={(e) => onChangeMin(e.target.value)}
          />
          <Input
            type="text"
            placeholder={String(defaultMax)}
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
