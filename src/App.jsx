import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Showcase from "./components/Showcase/Showcase";
import Newsletter from "./components/Newsletter/Newsletter";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { ProductContext } from "./context/ProductContext";
import productsData from "../public/products.json";
import { useFavorites } from "./hooks/useFavorites";
import { useCart } from "./hooks/useCart";
import { useSearch } from "./hooks/useSearch";
import { useFilters } from "./hooks/useFilters";
import { PAGES } from "./constants";

function App() {
  const favoritesState = useFavorites();
  const cartState = useCart();
  const [products] = useState(productsData.products);
  const [currentPage, setCurrentPage] = useState(PAGES.SHOP);
  const searchState = useSearch(products);
  const filtersState = useFilters(products, searchState.searchedProducts);

  const onChangePage = function (pageName) {
    return setCurrentPage(pageName);
  };

  const pages = {
    [PAGES.SHOP]: <Showcase />,
    [PAGES.CART]: <Cart />,
  };

  const favoriteCount = favoritesState.favorites.length;
  const cartCount = cartState.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <ProductContext.Provider
      value={{
        ...favoritesState,
        ...cartState,
        ...searchState,
        ...filtersState,
        products,
        onChangePage,
        favoriteCount,
        cartCount,
      }}
    >
      <div className="app">
        <Header />
        <ContentBlock>{pages[currentPage]}</ContentBlock>
        <Newsletter />
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
