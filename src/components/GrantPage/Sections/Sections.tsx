import { ReactElement } from "react";
import "./style.scss";
import { HashLink } from 'react-router-hash-link'
import React from "react";

const Sections = (): ReactElement => {
  return (
    <div className="grantpage-sections-list">
      <ol>
        <li>
          <HashLink smooth to="#summary">Краткая информация</HashLink>
        </li>
        <li>
          <HashLink smooth to="#main-info">Основные сведения о гранте</HashLink>
        </li>
        <li>
          <HashLink smooth to="#requirements">Требования для участия</HashLink>
        </li>
      </ol>
    </div>
  );
};

export default Sections;
