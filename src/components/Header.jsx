import "../styles/Header.css";
function Header({ favoriteCount, cartCount, onChangePage }) {
  return (
    <header className="header" data-testid="header">
      <div className="header-upper">
        <div className="header-left-side">
          <div className="burger-logo">
            <div className="burger-menu">
              <input
                type="checkbox"
                id="burger-checkbox"
                className="burger-checkbox"
              />
              <label className="burger" for="burger-checkbox"></label>
            </div>
            <div className="logo">
              <img src="/icons/logo.svg" alt="" />
            </div>
          </div>
          <div className="header-navigation">
            <div className="header-navigation-unit">
              <a href="">Home</a>
            </div>
            <div className="header-navigation-unit">
              <span>Pages</span>
              <img
                src="/icons/arrowdown.svg"
                alt=""
                className="regular-arrow"
              />
              <img
                src="/icons/arrowdownPink.svg"
                alt=""
                className="hover-arrow"
              />
            </div>
            <div className="header-navigation-unit active">
              <span>Shop</span>
              <img
                src="/icons/arrowdown.svg"
                alt=""
                className="regular-arrow"
              />
              <img
                src="/icons/arrowdownPink.svg"
                alt=""
                className="hover-arrow"
              />
            </div>
            <div className="header-navigation-unit">
              <a href="">Blog</a>
            </div>
            <div className="header-navigation-unit">
              <a href="">Contact</a>
            </div>
          </div>
        </div>
        <div className="header-right-side">
          <div className="header-right-side-icons">
            <img src="/icons/search.svg" alt="" />
          </div>
          <div className="header-right-side-icons">
            <img src="/icons/profile.svg" alt="" />
          </div>
          <div className="header-right-side-icons">
            <img src="/icons/favorites.svg" alt="" />
            <div className="count">
              <span className="span"></span>
              <span className="text">{favoriteCount}</span>
            </div>
          </div>
          <div className="header-right-side-icons">
            <button
              data-testid="cart-btn"
              className="cart-button-navigation"
              onClick={() => onChangePage("cart")}
            >
              <img src="/icons/cart.svg" alt="" />
            </button>

            <div className="count">
              <span className="span"></span>
              <span className="text">{cartCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-down">
        <div className="location-menu">
          <div className="location-menu-title">Shop</div>
          <div className="location-menu-navigation">
            <a href="" className="navigation-item border">
              Home
            </a>
            <button
              data-testid="shop-btn"
              className="navigation-item active"
              onClick={(event) => {
                event.preventDefault();
                onChangePage("shop");
              }}
            >
              Shop
            </button>
          </div>
          <div className="border-line"></div>
          <img src="/icons/dotsIcon12x12.svg" alt="" className="dotsIcon12" />
        </div>
        <div className="landing-image"></div>
      </div>
    </header>
  );
}

export default Header;
