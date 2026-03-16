export function Sort({ setSortingType }) {
  return (
    <div className="sort">
      <select
        data-testid="sort-selector"
        className="input"
        onChange={(e) => {
          setSortingType(e.target.value);
        }}
      >
        <option data-testid="sort-by-relevance" value="by relevance">
          by relevance
        </option>
        <option data-testid="sort-by-alphabet" value="by alphabet">
          by alphabet
        </option>
        <option data-testid="sort-by-price" value="by price">
          by price
        </option>
      </select>
    </div>
  );
}
