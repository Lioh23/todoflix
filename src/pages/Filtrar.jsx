import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../services/axios';

import "../styles/categories.css";
import { useState } from 'react';
import MoviesList from './../components/MoviesList';
import { imgURL } from './../services/axios';


export default function Filtrar() {

  const { pathname } = useLocation();

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    
    async function findMovies() {

      const { data } = await searchMovies(pathname.split('/')[2]);

      const { results } = data;

      const viewableMovies = results.filter(movie => {
      
        return movie.poster_path !== null;
      });

      const arrMovies = viewableMovies.map(movie => {

        return {
          image: `${imgURL}/w300/${movie.poster_path}`,
          rate: movie.vote_average,
          title: movie.title,
          description: movie.overview,
          id: movie.id
        }
      });

      setFilteredMovies(arrMovies);
    }

    findMovies();
  }, [pathname]);

  return (
    <div className="container">
      <h1 className="category-title">Resultados da Pesquisa</h1>

      {
        filteredMovies.length > 0 
        ? (<MoviesList movies={filteredMovies} />)
        : (<h2 className="no-movies">Nenhum filme foi encontrado!</h2>)
      }
    </div>
  )
}
