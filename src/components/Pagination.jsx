import styles from "../styles/Pagination.module.css";

export function Pagination({
  arrPages,
  currentPage,
  onPageChange,
  changePage,
  totalPages,
}) {
  return (
    <div className={styles.pagination}>
      <button
        data-testid="previous-page-arrow"
        className={styles.buttonArrowLeft}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/icons/leftArrowPage.svg" alt="" />
      </button>
      <div className={styles.pages}>
        {arrPages.map((page) => (
          <button
            data-testid={`page-${page}`}
            data-active={page === currentPage ? "true" : ""}
            className={
              page === currentPage
                ? `${styles.page} ${styles.active}`
                : styles.page
            }
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        data-testid="next-page-arrow"
        className={styles.buttonArrowRight}
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
