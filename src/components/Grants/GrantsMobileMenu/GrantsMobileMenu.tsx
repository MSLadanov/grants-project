import { ReactElement } from "react";
import "./style.scss";

const GrantsMobileMenu = ({
  toggleModal,
}): ReactElement => {
  return (
    <div className="grants-mobile-menu">
      <button>Сбросить</button>
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
