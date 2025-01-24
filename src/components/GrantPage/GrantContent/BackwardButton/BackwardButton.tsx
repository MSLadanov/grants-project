import { ReactElement } from "react";
import { NavLink } from "react-router";

const BackwardButton = (): ReactElement => {
  return (
    <div>
      <NavLink to={"/grants"}>Назад</NavLink>
    </div>
  );
};

export default BackwardButton;
