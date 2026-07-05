import { useLocalStorage } from "./useLocalStogage";
import { LS_KEYS } from "../constants";

export function useCart() {
  const [cart, setCart] = useLocalStorage(LS_KEYS.CART, []);

  const addCart = (id) => {
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

  const removeCart = (id) => {
    setCart((prevState) => {
      return prevState
        .map((item) =>
          item.id === id ? { id, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity !== 0);
    });
  };

  const removeFromCart = (id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  };

  return { cart, addCart, removeCart, removeFromCart };
}
