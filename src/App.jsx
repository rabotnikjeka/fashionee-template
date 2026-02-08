import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentBlock from "./components/ContentBlock";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
import CartContainer from "./components/CartContainer";
import { useState, useEffect } from "react";

function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState("shop");

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
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

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

  const pages = {
    shop: (
      <Showcase
        onLike={addFavorites}
        favorites={favorites}
        onCart={addCart}
        offCart={removeCart}
        cart={cart}
        products={products}
      />
    ),
    cart: <CartContainer products={products} cart={cart} />,
  };

  return (
    <div className="app">
      <Header
        favoriteCount={favorites.length}
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onChangePage={onChangePage}
      />
      <ContentBlock>{pages[currentPage]}</ContentBlock>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
