import "../styles/shop.css";
const Price = ({
  priceMin,
  priceMax,
  defaultMin,
  defaultMax,
  onChangeMin,
  onChangeMax,
}) => {
  return (
    <div className="aside-parameters">
      <div className="parameters-title">Price</div>
      <div className="parameters-components">
        <div className="price-bar">
          <input
            type="text"
            placeholder={String(defaultMin)}
            className="input"
            data-testid="price-min-input"
            value={priceMin}
            onChange={(e) => onChangeMin(e.target.value)}
          />
          <input
            type="text"
            placeholder={String(defaultMax)}
            className="input"
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
