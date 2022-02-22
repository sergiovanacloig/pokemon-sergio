import { useCallback, useState } from "react";

export default function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = useCallback((name) => {
    setFavourites((prevFavourites) => {
      const newFavourites = [...prevFavourites];
      const isPrevFavourite = prevFavourites.includes(name);

      if (isPrevFavourite) {
        const pos = newFavourites.indexOf(name);
        newFavourites.splice(pos, 1);
      } else {
        newFavourites.push(name);
      }

      return newFavourites;
    });
  }, []);

  const isFavourite = (name) => favourites.includes(name);

  return { toggleFavourite, isFavourite };
}
