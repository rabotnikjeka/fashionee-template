import "../styles/shop.css";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import { Sort } from "./Sort";
import { Pagination } from "./Pagination";
function RightSide() {
  const { filteredProducts } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingType, setSortingType] = useState("by relevance");
  const itemsPerPage = 12;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const arrPages =
    totalPages > 0
      ? Array.from({ length: totalPages }, (empty, i) => i + 1)
      : [];

  const sortedProduts = [...filteredProducts];

  if (sortingType === "by alphabet") {
    sortedProduts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      } else return 0;
    });
  } else if (sortingType === "by price") {
    sortedProduts.sort((a, b) => a.price - b.price);
  }

  const visibleProducts = sortedProduts.slice(firstIndex, lastIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);
  const changePage = function (page) {
    setCurrentPage(page);
  };
  return (
    <div className="right-side">
      <div className="count-sort">
        <div className="count">
          <span>There are </span>
          <span className="bold" data-testid="products-count">
            {filteredProducts.length}
          </span>
          <span> products in this category</span>
        </div>
        <Sort setSortingType={setSortingType} />
      </div>
      <div className="showcase">
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        arrPages={arrPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}
export default RightSide;
