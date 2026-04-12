import styles from "../styles/Shop.module.css";

const Colors = ({ colors, selectedColors, onToggleColor }) => {
  return (
    <div className={styles.asideParameters}>
      <div className={styles.parametersTitle}>Colors</div>
      <div className={styles.parametersComponents}>
        <div className={styles.colors}>
          {colors.map((color) => (
            <div className={styles.color} key={color}>
              <input
                type="checkbox"
                className={styles.colorCheckbox}
                id={color.toLowerCase()}
                name={color.toLowerCase()}
                value={color.toLowerCase()}
                data-testid={`filter-color-${color.toLowerCase()}`}
                checked={selectedColors.includes(color)}
                onChange={() => onToggleColor(color)}
              />
              <label
                className={styles.colorCheckboxLabel}
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
