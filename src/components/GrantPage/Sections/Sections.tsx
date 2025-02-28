import { ReactElement } from "react";
import "./style.scss";
import React from "react";

const Sections = (): ReactElement => {
  return (
    <div className="grantpage-sections-list">
      <ol>
        <li>
          <a href="#summary">Краткая информация</a>
        </li>
        <li>
          <a href="#main-info">Основные сведения о гранте</a>
        </li>
        <li>
          <a href="#requirements">Требования для участия</a>
        </li>
      </ol>
    </div>
  );
};

export default Sections;
