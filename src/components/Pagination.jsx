import "../styles/shop.css";

export function Pagination({
  arrPages,
  currentPage,
  onPageChange,
  changePage,
  totalPages,
}) {
  return (
    <div className="pagination">
      <button
        data-testid="previous-page-arrow"
        className="button-arrow-left"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/icons/leftArrowPage.svg" alt="" />
      </button>
      <div className="pages">
        {arrPages.map((page) => (
          <button
            data-testid={`page-${page}`}
            data-active={page === currentPage ? "true" : ""}
            className={page === currentPage ? "page active" : "page"}
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        data-testid="next-page-arrow"
        className="button-arrow-right"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        <img src="/icons/rightArrowPage.svg" alt="" />
      </button>
    </div>
  );
}
