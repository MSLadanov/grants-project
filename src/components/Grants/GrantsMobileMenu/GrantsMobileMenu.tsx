import { ReactElement, useContext } from "react";
import "./style.scss";
import GrantsContext from "@/contexts/GrantsContext";

const GrantsMobileMenu = ({ toggleModal }): ReactElement => {
  const { directions, setDirectionsList, setAmount, setDateRange } =
    useContext(GrantsContext);
  const handleReset = () => {
    setDirectionsList(directions);
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
