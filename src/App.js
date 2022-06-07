import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';

import { FavoriteMoviesProvider } from './hooks/useFavoriteMovies';
import { ModalAddMovieProvider } from './hooks/useModalAddMovie';

import Loader from './components/Loader';
import { Header } from './components/Header';

import './styles/global.css'
import { ModalAddFilm } from './components/ModalAddFilm';

const Home = lazy(() => import('./pages/Home'));
const Todos = lazy(() => import('./pages/Todos'));
const Favoritos = lazy(() => import('./pages/Favoritos'));
const Vistos = lazy(() => import('./pages/Vistos'));
const Filtrar = lazy(() => import('./pages/Filtrar'));
const AdicionadosRecentemente = lazy(() => import('./pages/AdicionadosRecentemente'));




function App() {

  Modal.setAppElement('#root');

  return (
    <div className="App">
      <FavoriteMoviesProvider>
        <ModalAddMovieProvider>

          <Router>
            <Header />
            <ModalAddFilm />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/vistos" element={<Vistos />} />
                <Route path="/adicionados_recentemente" element={<AdicionadosRecentemente />} />
                <Route path="/filtrar/:name" element={<Filtrar />} />
              </Routes>

            </Suspense>
          </Router>

        </ModalAddMovieProvider>
      </FavoriteMoviesProvider>
    </div>
  );
}

export default App;
