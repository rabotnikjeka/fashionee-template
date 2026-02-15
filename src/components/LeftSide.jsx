import "../styles/shop.css";
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Categories from "./Categories";
import Price from "./Price";
import Colors from "./Colors";
function LeftSide() {
  const {
    allCategories,
    allColors,
    minPrice,
    maxPrice,
    applyFilters,
    searchQuery,
    setSearchQuery,
  } = useContext(ProductContext);
  const defaultCategories = [
    "All",
    "Men",
    "Women",
    "Accessories",
    "New Arrivals",
  ];
  const defaultColors = ["Black", "Blue", "Red", "Yellow", "Green"];
  const categories =
    allCategories.length > 0 ? allCategories : defaultCategories;
  const colors = allColors.length > 0 ? allColors : defaultColors;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const handleToggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };
  const handleApply = () => {
    applyFilters({
      category: selectedCategory,
      colors: selectedColors,
      priceMin: priceMin !== "" ? Number(priceMin) : null,
      priceMax: priceMax !== "" ? Number(priceMax) : null,
    });
  };
  return (
    <div className="left-side">
      <div className="search-area">
        <label>
          <input
            type="text"
            placeholder="Search"
            className="input search-row"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img
            src="/icons/search.svg"
            alt=""
            className="left-side-search-icon"
          />
        </label>
      </div>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Price
        priceMin={priceMin}
        priceMax={priceMax}
        defaultMin={minPrice}
        defaultMax={maxPrice}
        onChangeMin={setPriceMin}
        onChangeMax={setPriceMax}
      />
      <Colors
        colors={colors}
        selectedColors={selectedColors}
        onToggleColor={handleToggleColor}
      />
      <div className="colors-bottom-side">
        <div className="deploy-colors">
          <img src="/icons/deployArrow.svg" alt="" />
          Deploy
        </div>
        <div className="button-line-wrapper">
          <button
            className="button"
            data-testid="apply-filter-btn"
            onClick={handleApply}
          >
            Apply Filter
          </button>
          <div className="button-line"></div>
        </div>
      </div>
      <div className="aside-parameters">
        <div className="parameters-title">Reviewed by you</div>
        <div className="parameters-components">
          <div className="reviewed-by-you">
            <div className="recomedation">
              <div className="recomendation-photo"></div>
              <div className="recomendation-info">
                <div className="recomendation-name">Retro style handbag</div>
                <div className="recomendation-price">
                  <div className="recomendation current-price">$35.99</div>
                  <div className="recomendation old-price">$52.99</div>
                </div>
              </div>
            </div>
            <div className="recomedation">
              <div className="recomendation-photo"></div>
              <div className="recomendation-info">
                <div className="recomendation-name">Warm casual sweater</div>
                <div className="recomendation-price">
                  <div className="recomendation current-price">$35.99</div>
                  <div className="recomendation old-price"></div>
                </div>
              </div>
            </div>
            <div className="recomedation">
              <div className="recomendation-photo"></div>
              <div className="recomendation-info">
                <div className="recomendation-name">
                  Textured turtleneck with zip
                </div>
                <div className="recomendation-price">
                  <div className="recomendation current-price">$35.99</div>
                  <div className="recomendation old-price"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aside-parameters">
        <div className="banner">
          <a href="">
            <img src="images/bannerSale.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default LeftSide;
