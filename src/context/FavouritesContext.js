import { createContext } from "react";
import useFavourites from "../hooks/useFavourites";

export const FavouritesContext = createContext({});

export const FavouritesProvider = ({ children }) => (
  <FavouritesContext.Provider value={useFavourites()}>
    {children}
  </FavouritesContext.Provider>
);
