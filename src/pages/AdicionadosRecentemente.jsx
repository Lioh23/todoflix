import { useState, useEffect } from "react";
import { getRecentMovies, imgURL } from "../services/axios";
import "../styles/categories.css"
import MoviesList from './../components/MoviesList';

export default function AdicionadosRecentemente({ activePage }) {
  
  const [recentMovies, setRecentMovies] = useState([]);


  useEffect(() => {

    async function loadMovies() {

      const { data } = await getRecentMovies();

      const filteredMovies = data.results.filter(movie => {
      
        return movie.poster_path !== null;
      });

      const arrMovies = filteredMovies.map(movie => {

        return {
          image: `${imgURL}/w300/${movie.poster_path}`,
          rate: movie.vote_average,
          title: movie.title,
          description: movie.overview,
          id: movie.id
        }
      });

      setRecentMovies(arrMovies);
    }

    loadMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="category-title">Adicionados Recentemente</h1>

      {
        recentMovies.length > 0 
        ? (<MoviesList movies={recentMovies} />)
        : (<h2 className="no-movies">Não existem filmes nesta categoria!</h2>)
      }
      
    </div>
  )
}