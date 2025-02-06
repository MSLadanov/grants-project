import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "./useOutsideClick";
import GrantsMobileFilter from "@/components/Grants/GrantsMobileFilter/GrantsMobileFilter";

function useFilterModal() {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  function toggleFilterModal() {
    setOpenModal(!openModal);
  }

  function handleOutSideClick() {
    if (openModal) {
      setOpenModal(false);
    }
  }

  useClickOutside(modalRef, handleOutSideClick);

  function FilterModal() {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      console.error("Модальное окно не обнаружено");
      return null;
    }
    return openModal
      ? createPortal(
          <GrantsMobileFilter />,
          modalRoot
        )
      : null;
  }

  return { toggleFilterModal, handleOutSideClick, FilterModal };
}

export default useFilterModal;
