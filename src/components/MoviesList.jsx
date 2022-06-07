import MovieItem from './MovieItem';

import '../styles/moviesList.css'

export default function MoviesList({ movies }) {

  return (
    <ul className="movies-list">
      {movies.map(movie => (

        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      )

      )}
    </ul>
  )
}
