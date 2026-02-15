import "../styles/shop.css";
const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="aside-parameters">
      <div className="parameters-title">Categories</div>
      <div className="parameters-components">
        <ul className="categories">
          {categories.map((cat) => (
            <li
              key={cat}
              className={
                selectedCategory === cat ? "category active" : "category"
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
