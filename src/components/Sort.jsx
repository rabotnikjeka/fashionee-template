import { useState } from "react";
export function Sort({ sortingType, setSortingType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sort">
      <div
        data-testid="sort-selector"
        className="input"
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
