import "../styles/categories.css"
import MoviesList from '../components/MoviesList';
import { useFavoriteMovies } from "../hooks/useFavoriteMovies";

export default function Favoritos() {

  const { favoriteMovies } = useFavoriteMovies();


  return (
    <div className="container">
      <h1 className="category-title">Favoritos</h1>

      {
        favoriteMovies.length > 0 
        ? (<MoviesList movies={favoriteMovies} />)
        : (<h2 className="no-movies">Você ainda não inseriu nenhum filme nesta classificação!</h2>)
      }
      
    </div>
  )
}