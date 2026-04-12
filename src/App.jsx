import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentBlock from "./components/ContentBlock";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
import Cart from "./components/Cart";
import { useState } from "react";
import { ProductContext } from "./context/ProductContext";
import productsData from "../public/products.json";
import { useLocalStorage } from "./hooks/useLocalStogage";

function App() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [products] = useState(productsData.products);
  const [currentPage, setCurrentPage] = useState("shop");
  const [appliedFilters, setAppliedFilters] = useState({
    category: "All",
    priceMin: null,
    priceMax: null,
    colors: [],
  });
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories =
    products.length > 0
      ? ["All", ...new Set(products.flatMap((p) => p.categories || []))]
      : [];
  const allColors =
    products.length > 0
      ? [...new Set(products.map((p) => p.color).filter(Boolean))]
      : [];
  const minPrice =
    products.length > 0 ? Math.min(...products.map((p) => p.price)) : 0;
  const maxPrice =
    products.length > 0 ? Math.max(...products.map((p) => p.price)) : 1000;

  let filteredProducts = [...products];

  if (searchQuery.trim() !== "") {
    const query = searchQuery.trim().toLowerCase();
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(query),
    );
  }

  if (appliedFilters.category && appliedFilters.category !== "All") {
    filteredProducts = filteredProducts.filter(
      (p) => p.categories && p.categories.includes(appliedFilters.category),
    );
  }

  if (appliedFilters.priceMin !== null || appliedFilters.priceMax !== null) {
    const pMin =
      appliedFilters.priceMin !== null
        ? Number(appliedFilters.priceMin)
        : minPrice;
    const pMax =
      appliedFilters.priceMax !== null
        ? Number(appliedFilters.priceMax)
        : maxPrice;
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= pMin && p.price <= pMax,
    );
  }

  if (appliedFilters.colors && appliedFilters.colors.length > 0) {
    filteredProducts = filteredProducts.filter(
      (p) => p.color && appliedFilters.colors.includes(p.color.toLowerCase()),
    );
  }

  const onChangePage = function (pageName) {
    return setCurrentPage(pageName);
  };

  const applyFilters = function (filters) {
    setAppliedFilters(filters);
  };

  const addFavorites = function (id) {
    setFavorites((prevState) =>
      prevState.includes(id)
        ? prevState.filter((itemId) => itemId !== id)
        : [...prevState, id],
    );
  };

  const addCart = function (id) {
    setCart((prevState) => {
      if (prevState.some((item) => item.id === id)) {
        return prevState.map((item) =>
          item.id === id ? { id, quantity: item.quantity + 1 } : item,
        );
      } else {
        return [...prevState, { id, quantity: 1 }];
      }
    });
  };

  const removeCart = function (id) {
    setCart((prevState) => {
      return prevState
        .map((item) =>
          item.id === id ? { id, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity !== 0);
    });
  };

  const removeFromCart = function (id) {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  };

  const pages = {
    shop: <Showcase />,
    cart: <Cart />,
  };

  const favoriteCount = favorites.length;
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <ProductContext.Provider
      value={{
        favoriteCount,
        cartCount,
        onChangePage,
        addFavorites,
        favorites,
        addCart,
        removeCart,
        removeFromCart,
        cart,
        products,
        filteredProducts,
        allCategories,
        allColors,
        minPrice,
        maxPrice,
        applyFilters,
        appliedFilters,
        searchQuery,
        setSearchQuery,
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
