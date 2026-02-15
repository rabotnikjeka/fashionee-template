import "../styles/shop.css";
const Colors = ({ colors, selectedColors, onToggleColor }) => {
  return (
    <div className="aside-parameters">
      <div className="parameters-title">Colors</div>
      <div className="parameters-components">
        <div className="colors">
          {colors.map((color) => (
            <div className="color" key={color}>
              <input
                type="checkbox"
                className="color-checkbox"
                id={color.toLowerCase()}
                name={color.toLowerCase()}
                value={color.toLowerCase()}
                data-testid={`filter-color-${color.toLowerCase()}`}
                checked={selectedColors.includes(color)}
                onChange={() => onToggleColor(color)}
              />
              <label
                className="color-checkbox-label"
                htmlFor={color.toLowerCase()}
              >
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Colors;
