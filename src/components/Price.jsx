import "../styles/shop.css";

const Price = ({
  priceMin,
  priceMax,
  defaultMin,
  defaultMax,
  onChangeMin,
  onChangeMax,
}) => {
  const displayMin =
    priceMin !== "" ? priceMin : defaultMin > 0 ? String(defaultMin) : "";
  const displayMax =
    priceMax !== "" ? priceMax : defaultMax > 0 ? String(defaultMax) : "";

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
            value={displayMin}
            onChange={(e) => onChangeMin(e.target.value)}
          />
          <input
            type="text"
            placeholder={String(defaultMax)}
            className="input"
            data-testid="price-max-input"
            value={displayMax}
            onChange={(e) => onChangeMax(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
