const Price = ({
  priceMin,
  priceMax,
  defaultMin,
  defaultMax,
  onPriceChange,
}) => {
  if (defaultMin === 0 && defaultMax === 0) {
    return null;
  }

  const displayMin = priceMin === "" ? String(defaultMin) : priceMin;
  const displayMax = priceMax === "" ? String(defaultMax) : priceMax;

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
            onChange={(e) =>
              onPriceChange({ min: e.target.value, max: displayMax })
            }
          />
          <input
            type="text"
            placeholder={String(defaultMax)}
            className="input"
            data-testid="price-max-input"
            value={displayMax}
            onChange={(e) =>
              onPriceChange({ min: displayMin, max: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
