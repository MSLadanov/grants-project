import { ReactElement } from "react";
import Sections from "../Sections/Sections";
import './style.scss'
import React from "react";

const MobileSectionMenu = (): ReactElement => {
  return (
    <div className="mobile-section">
      <Sections/>
    </div>
  );
};

export default MobileSectionMenu;
