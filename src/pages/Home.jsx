import { useEffect, useState } from 'react';
import '../styles/home.css';

import { AiFillLike } from 'react-icons/ai';
import { Slide } from './../components/Slide';

import { imgURL, getPopularMovies } from '../services/axios';
import ButtonLike from './../components/ButtonLike';
import { getClassRate } from '../util/movieShowing';



export default function Home() {

  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});

  useEffect(() => {

    async function loadMovies() {

      const { data } = await getPopularMovies();

      const arrMovies = data.results.map(movie => {

        return {
          image: `${imgURL}/w300/${movie.poster_path}`,
          rate: movie.vote_average,
          title: movie.title,
          description: movie.overview,
          id: movie.id
        }
      });

      const moviePosition = Math.floor(Math.random() * arrMovies.length);

      setFeaturedMovie(arrMovies[moviePosition]);
      setPopularMovies(arrMovies);
    }

    loadMovies();

  }, []);

  return (
    <div className="container">
      <div className="home">
        <div className="home-image">
          <img src={featuredMovie.image} alt="featured banner" />
        </div>
        <div className="home-description">
          <ButtonLike movie={featuredMovie} />
          <p className='home-description-category'>Visto recentemente</p>
          <h1 className='home-description-title'>{featuredMovie.title}</h1>
          <div className='home-description-text'>
            <p>
              {featuredMovie.description}
            </p>
          </div>
          <div className="home-rate">
            {featuredMovie.rate === 0 ? "N/A" : featuredMovie.rate}
            <AiFillLike className={getClassRate(featuredMovie.rate)}/>
          </div>

        </div>
      </div>

      <Slide category="Destaques" movies={popularMovies} />
    </div>


  )
}