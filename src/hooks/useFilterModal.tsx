import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "./useOutsideClick";
import GrantsMobileFilter from "@/components/Grants/GrantsContent/GrantsMobileFilter/GrantsMobileFilter";

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

  function FilterModal({
    directions,
    amounts,
    directionsList,
    setDirectionsList,
    setAmount,
    dateRange,
    setDateRange,
  }) {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      console.error("Модальное окно не обнаружено");
      return null;
    }
    return openModal
      ? createPortal(
          <GrantsMobileFilter
            directions={directions}
            amounts={amounts}
            directionsList={directionsList}
            setDirectionsList={setDirectionsList}
            setAmount={setAmount}
            dateRange={dateRange}
            setDateRange={setDateRange}
            ref={modalRef}
          />,
          modalRoot
        )
      : null;
  }

  return { toggleFilterModal, handleOutSideClick, FilterModal };
}

export default useFilterModal;
