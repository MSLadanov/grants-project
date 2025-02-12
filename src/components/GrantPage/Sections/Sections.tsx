import { ReactElement } from "react";
import './style.scss'
import React from "react";

const Sections = (): ReactElement => {
  return (
    <div className="grantpage-sections-list">
      <ol>
        <li>Краткая информация</li>
        <li>Основные сведения о гранте</li>
        <li>Требования для участия</li>
      </ol>
    </div>
  );
};

export default Sections;
