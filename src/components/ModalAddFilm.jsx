import { useState } from 'react';
import ReactModal from 'react-modal';

import { useModalAddMovie } from '../hooks/useModalAddMovie';

import { MdClose } from 'react-icons/md';
import { BsStar, BsStarFill } from 'react-icons/bs';

import '../styles/categories.css';
import '../styles/modal.css';

import placeImage from '../assets/place-image-no-bg.png';

export function ModalAddFilm() {

  const { isModalOpen, closeModal } = useModalAddMovie();
  const [descricao, setDescricao] = useState('');
  const [statusAssistido, setStatusAssistido] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);

  const clearModalInfos = () => {
    closeModal();
    setStatusAssistido(null);
    setDescricao('');
    setAvaliacao(0);
  }

  const modalSettings = {
    isOpen: isModalOpen,
    shouldCloseOnOverlayClick: true,
    onRequestClose: clearModalInfos,
    style: {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      content: {
        width: '900px',
        height: '80vh',
        margin: 'auto',
        backgroundColor: '#000',
        borderRadius: '10px',
        padding: '4.5rem 4rem 1rem 4rem',
      }
    }
  }

  const updateDescricao = (e) => setDescricao(e.target.value);

  return (
    <ReactModal {...modalSettings}>

      <MdClose className="modal-close" onClick={clearModalInfos} />

      <h1 className="modal-title">Adicionar Filme</h1>

      <form className="modal-form" action="">
        <div className="modal-grid">
          <div className="modal-grid-item">
            <div className="modal-form-group">
              <label className="modal-label" htmlFor="nome">Nome</label>
              <input className="modal-input" type="text" name="nome" id="nome" />
            </div>
            <div className="modal-form-group">
              <label className="modal-label" htmlFor="descricao">
                <span>Descrição</span>
                <span className="modal-input-length">{descricao.length}/200</span>
              </label>
              <textarea className="modal-input" name="descricao" id="descricao" onChange={(e) => updateDescricao(e)}></textarea>
            </div>
            <div className="modal-form-group">
              <label className="modal-label" htmlFor="status">Status</label>

              <label className="modal-radio" htmlFor="assistido">
                <input className="modal-radio-input" type="radio" name="status" id="assistido" onChange={() => setStatusAssistido('assistido')} />
                <div className={`modal-radio-pseudo-input ${statusAssistido === 'assistido' ? 'active' : ''}`}></div>
                Já assisti
              </label>

              <label className="modal-radio" htmlFor="nao-assistido">
                <input className="modal-radio-input" type="radio" name="status" id="nao-assistido" onChange={() => setStatusAssistido('nao-assistido')} />
                <div className={`modal-radio-pseudo-input ${statusAssistido === 'nao-assistido' ? 'active' : ''}`}></div>
                Ainda não assisti
              </label>
            </div>
            <div className="modal-form-group">
              <label className="modal-label" htmlFor="nota">Nota</label>

              <div className="modal-avaliacao">
                <label htmlFor="avaliacao-1">
                  <input className="modal-radio-input" type="radio" name="avaliacao" id="avaliacao-1" onChange={() => setAvaliacao(1)} />
                  {
                    avaliacao >= 1
                      ? (<BsStarFill />)
                      : (<BsStar />)
                  }
                </label>
                <label htmlFor="avaliacao-2">
                  <input className="modal-radio-input" type="radio" name="avaliacao" id="avaliacao-2" onChange={() => setAvaliacao(2)} />
                  {
                    avaliacao >= 2
                      ? (<BsStarFill />)
                      : (<BsStar />)
                  }
                </label>
                <label htmlFor="avaliacao-3">
                  <input className="modal-radio-input" type="radio" name="avaliacao" id="avaliacao-3" onChange={() => setAvaliacao(3)} />
                  {
                    avaliacao >= 3
                      ? (<BsStarFill />)
                      : (<BsStar />)
                  }
                </label>
                <label htmlFor="avaliacao-4">
                  <input className="modal-radio-input" type="radio" name="avaliacao" id="avaliacao-4" onChange={() => setAvaliacao(4)} />
                  {
                    avaliacao >= 4
                      ? (<BsStarFill />)
                      : (<BsStar />)
                  }
                </label>
                <label htmlFor="avaliacao-5">
                  <input className="modal-radio-input" type="radio" name="avaliacao" id="avaliacao-5" onChange={() => setAvaliacao(5)} />
                  {
                    avaliacao >= 5
                      ? (<BsStarFill />)
                      : (<BsStar />)
                  }
                </label>

                <span className="modal-text-avaliacao">({avaliacao}/5)</span>
              </div>
            </div>
          </div>
          <div className="modal-grid-item">
            <div className="modal-form-group">
              <label htmlFor="banner" className="modal-label">Imagem de Capa</label>
              <img src={placeImage} alt="Example" className="modal-empty-image" />
              <button className="modal-button">
                Selecionar imagem
              </button>
            </div>
          </div>
          <div className="modal-finish-buttons">
            <button type="button" className="modal-button modal-button-cancel" onClick={clearModalInfos}>
              Cancelar
            </button>
            <button type="submit" className="modal-button modal-button-confirm">
              Confirmar
            </button>
          </div>
        </div>
      </form>

    </ReactModal>

  );
}