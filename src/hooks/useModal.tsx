import { useState, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "./useOutsideClick";

function useModal(modalContent: ReactElement, closingOutside: boolean) {
  const modalRef = useRef(null);
  const [isModalOpened, setIsModalOpened] = useState(false);

  function toggleModal() {
    setIsModalOpened((prev) => !prev);
  }

  function openModal() {
    setIsModalOpened(true);
  }

  function closeModal() {
    setIsModalOpened(false);
  }

  function handleOutSideClick() {
    if (isModalOpened) {
      setIsModalOpened(false);
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
    openModal,
    closeModal,
    setIsModalOpened,
  };
}

export default useModal;
