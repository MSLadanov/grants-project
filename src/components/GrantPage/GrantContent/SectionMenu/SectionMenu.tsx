import { ReactElement } from "react";
import Sections from "./Sections/Sections";
import './style.scss'

const SectionMenu = (): ReactElement => {
  return (
    <div className="grantpage-sections">
      <h1>Разделы</h1>
      <Sections/>
    </div>
  );
};

export default SectionMenu;
