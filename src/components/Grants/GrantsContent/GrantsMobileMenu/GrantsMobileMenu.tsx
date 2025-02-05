import { ReactElement } from "react";
import "./style.scss";

const GrantsMobileMenu = ({
  toggleModal,
  handleOutSideClick,
}): ReactElement => {
  return (
    <div className="grants-mobile-menu">
      <button>Сбросить</button>
      <button
        onClick={(e) => {
          toggleModal();
          handleOutSideClick(e);
        }}
      >
        Фильтр
      </button>
    </div>
  );
};

export default GrantsMobileMenu;
