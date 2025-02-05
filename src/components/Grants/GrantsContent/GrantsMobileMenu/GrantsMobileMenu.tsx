import { ReactElement } from "react";
import "./style.scss";

const GrantsMobileMenu = ({
  toggleFilterModal,
  handleOutSideClick,
}): ReactElement => {
  return (
    <div className="grants-mobile-menu">
      <button>Сбросить</button>
      <button
        onClick={(e) => {
          toggleFilterModal();
          handleOutSideClick(e);
        }}
      >
        Фильтр
      </button>
    </div>
  );
};

export default GrantsMobileMenu;
