import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = useCallback((meetup) => {
    setFavorites((prevFavorites) => [...prevFavorites, meetup]);
  }, []);

  const removeFavorite = useCallback((meetupId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== meetupId)
    );
  }, []);

  const isFavorite = useCallback(
    (meetupId) => favorites.some((item) => item.id === meetupId),
    [favorites]
  );

  const favoritesActions = useMemo(
    () => ({ addFavorite, removeFavorite, isFavorite }),
    [addFavorite, removeFavorite, isFavorite]
  );

  return (
    <FavoritesContext.Provider value={{ favorites, ...favoritesActions }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
