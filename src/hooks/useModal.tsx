import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "./useOutsideClick";
import GrantsMobileFilter from "@/components/Grants/GrantsContent/GrantsMobileFilter/GrantsMobileFilter";

function useModal() {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  function toggleModal() {
    !openModal && setOpenModal(true);
  }
  function handleOutSideClick() {
    openModal && setOpenModal(false);
  }
  useClickOutside(modalRef, handleOutSideClick);
  
  function Modal() {
    return createPortal(
      openModal && <GrantsMobileFilter/>,
      document.getElementById("modal")!
    );
  }
  return { toggleModal, handleOutSideClick, Modal };
}

export default useModal;
