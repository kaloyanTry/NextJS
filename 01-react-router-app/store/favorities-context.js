import { createContext, useState } from 'react';

const FavoritiesContext = createContext({
  favorities: [],
  totalFavorities: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritiesContextProvider({ children }) {
  const [userFavorities, setUserFavorities] = useState([]);

  function addFavoritieHandler(favoriteMeetup) {
    setUserFavorities((prevUserFavorities) => {
      return prevUserFavorities.concat(favoriteMeetup);
    });
  }

  function removeFavoritiesHandler(meetupId) {
    setUserFavorities((prevUserFavorities) => {
      return prevUserFavorities.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorities.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorities: userFavorities,
    totalFavorities: userFavorities.length,

    addFavorite: addFavoritieHandler,
    removeFavorite: removeFavoritiesHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritiesContext.Provider value={context}>
      {children}
    </FavoritiesContext.Provider>
  );
}

export default FavoritiesContext;
