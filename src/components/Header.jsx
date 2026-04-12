import styles from "../styles/Header.module.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Header() {
  const { favoriteCount, cartCount, onChangePage } = useContext(ProductContext);
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.headerUpper}>
        <div className={styles.headerLeftSide}>
          <div className={styles.burgerLogo}>
            <div className={styles.burgerMenu}>
              <input
                type="checkbox"
                id="burger-checkbox"
                className={styles.burgerCheckbox}
              />
              <label
                className={styles.burger}
                htmlFor="burger-checkbox"
              ></label>
            </div>
            <div className={styles.logo}>
              <img src="/icons/logo.svg" alt="" />
            </div>
          </div>
          <div className={styles.headerNavigation}>
            <div className={styles.headerNavigationUnit}>
              <a href="">Home</a>
            </div>
            <div className={styles.headerNavigationUnit}>
              <span>Pages</span>
              <img
                src="/icons/arrowdown.svg"
                alt=""
                className={styles.regularArrow}
              />
              <img
                src="/icons/arrowdownPink.svg"
                alt=""
                className={styles.hoverArrow}
              />
            </div>
            <div className={`${styles.headerNavigationUnit} ${styles.active}`}>
              <span>Shop</span>
              <img
                src="/icons/arrowdown.svg"
                alt=""
                className={styles.regularArrow}
              />
              <img
                src="/icons/arrowdownPink.svg"
                alt=""
                className={styles.hoverArrow}
              />
            </div>
            <div className={styles.headerNavigationUnit}>
              <a href="">Blog</a>
            </div>
            <div className={styles.headerNavigationUnit}>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
        <div className={styles.headerRightSide}>
          <div className={styles.headerRightSideIcons}>
            <img src="/icons/search.svg" alt="" />
          </div>
          <div className={styles.headerRightSideIcons}>
            <img src="/icons/profile.svg" alt="" />
          </div>
          <div className={styles.headerRightSideIcons}>
            <img src="/icons/favorites.svg" alt="" />
            <div className={styles.count}>
              <span className={styles.span}></span>
              <span className={styles.text}>{favoriteCount}</span>
            </div>
          </div>
          <div className={styles.headerRightSideIcons}>
            <button
              data-testid="cart-btn"
              className={styles.cartButtonNavigation}
              onClick={() => onChangePage("cart")}
            >
              <img src="/icons/cart.svg" alt="" />
            </button>

            <div className={styles.count}>
              <span className={styles.span}></span>
              <span className={styles.text}>{cartCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerDown}>
        <div className={styles.locationMenu}>
          <div className={styles.locationMenuTitle}>Shop</div>
          <div className={styles.locationMenuNavigation}>
            <a href="" className={`${styles.navigationItem} ${styles.border}`}>
              Home
            </a>
            <button
              data-testid="shop-btn"
              className={`${styles.navigationItem} ${styles.active}`}
              onClick={(event) => {
                event.preventDefault();
                onChangePage("shop");
              }}
            >
              Shop
            </button>
          </div>
          <div className={styles.borderLine}></div>
          <img
            src="/icons/dotsIcon12x12.svg"
            alt=""
            className={styles.dotsIcon12}
          />
        </div>
        <div className={styles.landingImage}></div>
      </div>
    </header>
  );
}

export default Header;
