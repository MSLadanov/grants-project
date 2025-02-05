import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "./useOutsideClick";
import GrantsMobileFilter from "@/components/Grants/GrantsContent/GrantsMobileFilter/GrantsMobileFilter";

function useModal() {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    setOpenModal(!openModal);
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
      ? createPortal(<GrantsMobileFilter ref={modalRef} />, modalRoot)
      : null;
  }

  return { toggleModal, handleOutSideClick, Modal };
}

export default useModal;
