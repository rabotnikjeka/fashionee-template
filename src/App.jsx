import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentBlock from "./components/ContentBlock";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
import CartContainer from "./components/CartContainer";
import { useState, useEffect } from "react";
import { ProductContext } from "./context/ProductContext";
function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState("shop");
  const [appliedFilters, setAppliedFilters] = useState(
    JSON.parse(localStorage.getItem("appliedFilters")) || {
      category: "All",
      priceMin: null,
      priceMax: null,
      colors: [],
    },
  );
  const [allCategories, setAllCategories] = useState([]);
  const [allColors, setAllColors] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangePage = function (pageName) {
    return setCurrentPage(pageName);
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("appliedFilters", JSON.stringify(appliedFilters));
  }, [appliedFilters]);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  useEffect(() => {
    let result = [...products];
    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
      );
    }
    if (appliedFilters.category && appliedFilters.category !== "All") {
      result = result.filter(
        (p) => p.categories && p.categories.includes(appliedFilters.category),
      );
    }
    const pMin =
      appliedFilters.priceMin !== null ? appliedFilters.priceMin : minPrice;
    const pMax =
      appliedFilters.priceMax !== null ? appliedFilters.priceMax : maxPrice;
    result = result.filter((p) => p.price >= pMin && p.price <= pMax);
    if (appliedFilters.colors.length > 0) {
      result = result.filter(
        (p) => p.color && appliedFilters.colors.includes(p.color.toLowerCase()),
      );
    }
    setFilteredProducts(result);
  }, [products, appliedFilters, minPrice, maxPrice, searchQuery]);
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
    cart: <CartContainer />,
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
