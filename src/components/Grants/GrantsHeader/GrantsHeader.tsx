import { ReactElement } from "react";
import sponsors from '@/assets/sponsors.svg'
import "./style.scss";

const GrantsHeader = (): ReactElement => {
  return (
    <div className="grants-header">
      <div className="grants-header-left">
        <h1>Подбери программу для реализации своего проекта</h1>
      </div>
      <div className="grants-header-right">
        <img src={sponsors} alt="" />
      </div>
    </div>
  );
};

export default GrantsHeader;
