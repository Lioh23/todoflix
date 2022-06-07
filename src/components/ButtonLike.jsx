import { useFavoriteMovies } from '../hooks/useFavoriteMovies';

import { FaHeart } from 'react-icons/fa';

import '../styles/buttonLike.css';

export default function ButtonLike({ className = '', movie }) {


  const { toggleFavoriteMovie } = useFavoriteMovies();

  return (
    <div className={`button-like ${className}`} onClick={() => toggleFavoriteMovie(movie)}>
      <FaHeart size={"1rem"} />
    </div>
  )
}
