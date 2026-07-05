import styles from "./LeftSide.module.css";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { useState, useContext, useRef } from "react";
import { ProductContext } from "../../context/ProductContext";
import Categories from "../Categories/Categories";
import Price from "../Price/Price";
import Colors from "../Colors/Colors";

function LeftSide() {
  const {
    allCategories,
    allColors,
    minPrice,
    maxPrice,
    applyFilters,
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
  const [priceMin, setPriceMin] = useState(String(minPrice));
  const [priceMax, setPriceMax] = useState(String(maxPrice));
  const [localSearch, setLocalSearch] = useState("");
  const debounceTimer = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      setSearchQuery(value);
    }, 300);
  };

  const handleToggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const handleApply = () => {
    const finalMin = priceMin === "" ? String(minPrice) : priceMin;
    const finalMax = priceMax === "" ? String(maxPrice) : priceMax;
    setPriceMin(finalMin);
    setPriceMax(finalMax);
    applyFilters({
      category: selectedCategory,
      colors: selectedColors.map((c) => c.toLowerCase()),
      priceMin: Number(finalMin),
      priceMax: Number(finalMax),
    });
  };

  return (
    <div className={styles.leftSide}>
      <div className={styles.searchArea}>
        <label>
          <Input
            type="text"
            placeholder="Search"
            className={styles.searchRow}
            data-testid="search-input"
            value={localSearch}
            onChange={handleSearchChange}
          />
          <img
            src="/icons/search.svg"
            alt=""
            className={styles.leftSideSearchIcon}
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
      <div className={styles.colorsBottomSide}>
        <div className={styles.deployColors}>
          <img src="/icons/deployArrow.svg" alt="" />
          Deploy
        </div>
        <Button data-testid="apply-filter-btn" onClick={handleApply}>
          Apply Filter
        </Button>
      </div>
      <div className={styles.asideParameters}>
        <div className={styles.parametersTitle}>Reviewed by you</div>
        <div className={styles.parametersComponents}>
          <div className={styles.reviewedByYou}>
            <div className={styles.recomedation}>
              <div className={styles.recomedationPhoto}></div>
              <div className={styles.recomendationInfo}>
                <div className={styles.recomendationName}>
                  Retro style handbag
                </div>
                <div className={styles.recomendationPrice}>
                  <div className={styles.recomendationCurrentPrice}>$35.99</div>
                  <div className={styles.recomendationOldPrice}>$52.99</div>
                </div>
              </div>
            </div>
            <div className={styles.recomedation}>
              <div className={styles.recomedationPhoto}></div>
              <div className={styles.recomendationInfo}>
                <div className={styles.recomendationName}>
                  Warm casual sweater
                </div>
                <div className={styles.recomendationPrice}>
                  <div className={styles.recomendationCurrentPrice}>$35.99</div>
                </div>
              </div>
            </div>
            <div className={styles.recomedation}>
              <div className={styles.recomedationPhoto}></div>
              <div className={styles.recomendationInfo}>
                <div className={styles.recomendationName}>
                  Textured turtleneck with zip
                </div>
                <div className={styles.recomendationPrice}>
                  <div className={styles.recomendationCurrentPrice}>$35.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.asideParameters}>
        <div className={styles.banner}>
          <a href="">
            <img src="images/bannerSale.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
