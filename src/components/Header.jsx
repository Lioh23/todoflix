import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useModalAddMovie } from '../hooks/useModalAddMovie';

import '../styles/header.css';

import { IoMdArrowDropdown } from 'react-icons/io';
import { InputSearchMovies } from './InputSearchMovies';
import { BiUser } from 'react-icons/bi';


export function Header() {
 
  const { openModal } = useModalAddMovie();

  const location = useLocation();

  const activePage = location.pathname === '/' ? 'home' : 'categorias';

  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => setShowCategories(!showCategories);

  const iconProps = {
    dropdown: {
      size: "1.5rem"
    }
  };

  return (
    <header className='header container'>
      <div className='header-menu'>
        <h1 className="header-logo">Todoflix</h1>
        <ul className='header-list'>
          <li className= {`header-item ${activePage === "home" && "header-item__active"}`}>
            <NavLink className="header-link" to="/">
              Início
            </NavLink>
          </li>
          <li className="header-item" 
              onMouseEnter={toggleCategories} 
              onMouseLeave={toggleCategories}
            >
            <button className={`header-btn-submenu ${activePage === "categorias" && "header-item__active"}`}>
              <span>Categorias</span>
              <IoMdArrowDropdown size={iconProps.dropdown.size} />
            </button>

            {showCategories && (
              
              <ul className='header-list-categories'>
                <li className='header-category'>
                  <NavLink to="/todos">
                    Todos
                  </NavLink>
                </li>
                <li className='header-category'>
                  <NavLink to="/favoritos">
                    Favoritos
                  </NavLink>
                </li>
                <li className='header-category'>
                  <NavLink to="/vistos">
                    Já vistos
                  </NavLink>
                </li>
                <li className='header-category'>
                  <NavLink to="/adicionados_recentemente">
                    Adicionados
                  </NavLink>
                </li>
              </ul>
            )}

          </li>
        </ul>
      </div>
      <div className='header-actions'>
        <button className='header-btn-add-film' onClick={openModal}>Adicionar Filme</button>
        <InputSearchMovies />
        <div className='header-login'>
          <div className='header-login-avatar'>
            <BiUser size={"1.5rem"} />
          </div>
          <IoMdArrowDropdown size={iconProps.dropdown.size} />
        </div>
      </div>
    </header>
  )
}