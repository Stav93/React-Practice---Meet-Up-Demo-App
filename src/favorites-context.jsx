import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevState) => {
      return [...prevState, favoriteMeetup];
    });
    // setUserFavorites(prevState => prevState.concat(favoriteMeetup));
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevState) =>
      prevState.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
