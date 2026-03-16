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
        className="button-arrow-left"
        data-testid="previous-page-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/icons/leftArrowPage.svg" alt="" />
      </button>
      <div className="pages" data-testid={currentPage}>
        {arrPages.map((page) => (
          <button
            className={page === currentPage ? "page active" : "page"}
            data-active={page === currentPage ? "true" : ""}
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="button-arrow-right"
        data-testid="next-page-arrow"
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
