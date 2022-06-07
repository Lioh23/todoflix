import { createContext, useContext, useState } from "react";

const favoriteMoviesContext = createContext({});


export function FavoriteMoviesProvider({ children }) {

  const [favoriteMovies, setFavoriteMovies] = useState(() => {

    const storagedMovies = localStorage.getItem('@Todoflix:FavoriteMovies');

    if (storagedMovies) {
      
      return JSON.parse(storagedMovies);
    }

    return [];
  });


  const toggleFavoriteMovie = (movie) => {

    const movieIndex = favoriteMovies.findIndex(m => m.id === movie.id);
    const updatedFavoriteMovies = [...favoriteMovies];

    if (movieIndex >= 0) {

      updatedFavoriteMovies.splice(movieIndex, 1); 
    } else {
      
      updatedFavoriteMovies.push(movie);
    }

    setFavoriteMovies(updatedFavoriteMovies);
    localStorage.setItem("@Todoflix:FavoriteMovies", JSON.stringify(updatedFavoriteMovies));
  }


  return (
    <favoriteMoviesContext.Provider value={{ toggleFavoriteMovie, favoriteMovies }}>
      {children}
    </favoriteMoviesContext.Provider>
  );
}

export function useFavoriteMovies() {

  return useContext(favoriteMoviesContext);
}
