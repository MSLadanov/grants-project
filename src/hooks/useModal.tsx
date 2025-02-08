import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "./useOutsideClick";

function useModal(modalContent) {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    setOpenModal(prev => !prev);
  }

  function closeModal() {
    setOpenModal(false);
  }

  function handleOutSideClick() {
    if (openModal) {
      setOpenModal(false);
    }
  }

  useClickOutside(modalRef, handleOutSideClick);

  function Modal() {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      console.error("Модальное окно не обнаружено");
      return null;
    }
    return openModal
      ? createPortal(
          <div ref={modalRef}>
            {modalContent}
          </div>,
          modalRoot
        )
      : null;
  }

  return { toggleModal, Modal, openModal, closeModal };
}

export default useModal;
