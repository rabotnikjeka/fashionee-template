import styles from "../styles/Shop.module.css";

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className={styles.asideParameters}>
      <div className={styles.parametersTitle}>Categories</div>
      <div className={styles.parametersComponents}>
        <ul className={styles.categories}>
          {categories.map((cat) => (
            <li
              key={cat}
              className={
                selectedCategory === cat
                  ? `${styles.category} ${styles.active}`
                  : styles.category
              }
              data-testid={`filter-category-${cat.toLowerCase()}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Categories;
