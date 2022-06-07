import "../styles/movieItem.css";

import { AiFillLike } from 'react-icons/ai';

import ButtonLike from './ButtonLike';

import { getClassRate, limitChars } from './../util/movieShowing';


export default function MovieItem({ movie }) {

  

  return (
    <div className="movie" key={movie.id}>
      <ButtonLike className="movie-button-like" movie={movie} />
      <img className="movie-image" src={movie.image} alt={movie.title} />

      <div className="movie-header">
        <h3 className="movie-title">
          {movie.title}
        </h3>
        <h3 className="movie-rate">
          {movie.rate === 0 ? "N/A" : movie.rate}
          <AiFillLike className={getClassRate(movie.rate)} />
        </h3>
      </div>
      <p className="movie-description">
        {limitChars(movie.description)}
      </p>
    </div>
  )
}
