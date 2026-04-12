import { useState } from "react";
import styles from "../styles/Shop.module.css";
import inputStyles from "../styles/Input.module.css";

export function Sort({ sortingType, setSortingType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.sort}>
      <div
        data-testid="sort-selector"
        className={inputStyles.input}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        style={{ cursor: "pointer" }}
      >
        {sortingType}
        <div
          style={{
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            cursor: "pointer",
            border: "1px solid",
          }}
        >
          <div
            data-testid="sort-by-relevance"
            onClick={() => {
              setSortingType("by relevance");
            }}
          >
            by relevance
          </div>
          <div
            data-testid="sort-by-alphabet"
            onClick={() => {
              setSortingType("by alphabet");
            }}
          >
            by alphabet
          </div>
          <div
            data-testid="sort-by-price"
            onClick={() => {
              setSortingType("by price");
            }}
          >
            by price
          </div>
        </div>
      </div>
    </div>
  );
}
