import { ReactElement } from "react";
import Sections from "../Sections/Sections";
import { NavLink } from "react-router";
import './style.scss'
import React from "react";

const SectionMenu = (): ReactElement => {
  return (
    <div className="grantpage-sections">
      <h1>Разделы</h1>
      <Sections/>
      <NavLink to={""}>Перейти на сайт</NavLink>
    </div>
  );
};

export default SectionMenu;
