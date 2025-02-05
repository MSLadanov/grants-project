import { ReactElement } from "react";
import './style.scss'

const GrantsMobileMenu = (): ReactElement => {
  return (
    <div className="grants-mobile-menu">
      <button>Сбросить</button>
      <button>Фильтр</button>
    </div>
  );
};

export default GrantsMobileMenu;
