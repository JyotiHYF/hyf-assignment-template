import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const addPlanetToWishlist = (planet) => {
    setPlanetsWishlist((prev) => {
      if (prev.find((p) => p.name === planet.name)) return prev;
      return [...prev, planet];
    });
  };

  const removePlanetFromWishlist = (planetName) => {
    setPlanetsWishlist((prev) => prev.filter((p) => p.name !== planetName));
  };

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((p) => p.name === planetName);
  };

  const wishlistCount = planetsWishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
