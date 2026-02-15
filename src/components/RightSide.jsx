import "../styles/shop.css";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
function RightSide() {
  const { filteredProducts } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const arrPages =
    totalPages > 0
      ? Array.from({ length: totalPages }, (empty, i) => i + 1)
      : [];
  const visibleProducts = filteredProducts.slice(firstIndex, lastIndex);

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
        <div className="sort">
          <select className="input">
            <option value="RELEVANCE">Relevance</option>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
        </div>
      </div>
      <div className="showcase">
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <div className="pagination">
        <button
          className="button-arrow-left"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src="/icons/leftArrowPage.svg" alt="" />
        </button>
        <div className="pages">
          {arrPages.map((page) => (
            <button
              className={page === currentPage ? "page active" : "page"}
              key={page}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="button-arrow-right"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          <img src="/icons/rightArrowPage.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
export default RightSide;
