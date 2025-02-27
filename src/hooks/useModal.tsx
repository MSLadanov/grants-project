import { useState, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "./useOutsideClick";

function useModal(modalContent: ReactElement, closingOutside: boolean) {
  const modalRef = useRef(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const shadowBox = document.getElementById('shadow-box')
  function toggleModal() {
    setIsModalOpened((prev) => !prev);
    if(shadowBox){
      shadowBox.classList.toggle('toggled-shadow-box')
    }
  }

  function handleOutSideClick() {
    if (isModalOpened) {
      setIsModalOpened(false);
      if(shadowBox){
        shadowBox.classList.remove('toggled-shadow-box')
      }
    }
  }

  useClickOutside(modalRef, handleOutSideClick);

  function Modal() {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      console.error("Модальное окно не обнаружено");
      return null;
    }
    return isModalOpened
      ? createPortal(
          <div ref={closingOutside ? modalRef : null}>{modalContent}</div>,
          modalRoot
        )
      : null;
  }

  return {
    toggleModal,
    Modal,
    isModalOpened,
    setIsModalOpened,
  };
}

export default useModal;
