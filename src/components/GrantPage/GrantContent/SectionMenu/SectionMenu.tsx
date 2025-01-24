import { ReactElement } from "react";
import Sections from "./Sections/Sections";

const SectionMenu = (): ReactElement => {
  return (
    <div>
      <h1>Разделы</h1>
      <Sections/>
    </div>
  );
};

export default SectionMenu;
