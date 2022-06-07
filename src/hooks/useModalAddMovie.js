import { createContext, useContext, useState } from "react";

const modalAddMovieContext = createContext({});

export function ModalAddMovieProvider({ children }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (

    <modalAddMovieContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </modalAddMovieContext.Provider>
  );
}

export function useModalAddMovie() {

  return useContext(modalAddMovieContext);
}