import { useLocalStorage } from "./useLocalStogage";
import { LS_KEYS } from "../constants";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage(LS_KEYS.FAVORITES, []);

  const addFavorites = (id) => {
    setFavorites((prevState) =>
      prevState.includes(id)
        ? prevState.filter((itemId) => itemId !== id)
        : [...prevState, id],
    );
  };

  return { favorites, addFavorites };
}
