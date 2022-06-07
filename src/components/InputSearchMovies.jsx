import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HiOutlineSearch } from 'react-icons/hi';



export function InputSearchMovies() {

  
  const [searchInputValue, setSearchInputValue] = useState('');
  
  const navigate = useNavigate();

  const handleInputChange = e => {

    setSearchInputValue(e.target.value);
  }

  const handleSearchMovie = e => {
  
    e.preventDefault();

    navigate(`/filtrar/${searchInputValue}`);
  }

  return (
    <form className='header-search-film' onSubmit={handleSearchMovie}>
      <button type="submit">
        <HiOutlineSearch size={"1rem"} />
      </button>
      <input type="text" name="searchFilm" id="searchFilm" placeholder='Pesquisar' onChange={handleInputChange} />
    </form>
  )
}
