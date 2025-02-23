import { ReactElement, useContext } from "react";
import "./style.scss";
import GrantsContext from "../../../contexts/GrantsContext";
import React from "react";

const GrantsMobileMenu = ({
  toggleModal,
}: {
  toggleModal: () => void;
}): ReactElement => {
  const { setDirectionsList, setAmount, setDateRange } =
    useContext(GrantsContext);
  const handleReset = () => {
    setDirectionsList([]);
    setAmount(null);
    setDateRange([null, null]);
  };
  return (
    <div className="grants-mobile-menu">
      <button onClick={handleReset}>Сбросить</button>
      <button
        onClick={() => {
          toggleModal();
        }}
      >
        Фильтр
      </button>
    </div>
  );
};

export default GrantsMobileMenu;
