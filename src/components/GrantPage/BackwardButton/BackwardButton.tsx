import { ReactElement } from "react";
import { NavLink } from "react-router";
import backwardArrow from "@/assets/backward-arrow.svg";
import backwardArrowWhite from '@/assets/backward-white.svg'
import "./style.scss";

const BackwardButton = (): ReactElement => {
  return (
    <div className="backward-button-wrapper">
      <div className="backward-button">
        <img className="arrow-blue" src={backwardArrow} />
        <img className="arrow-white" src={backwardArrowWhite} />
        <NavLink to={"/grants"}>Назад</NavLink>
      </div>
    </div>
  );
};

export default BackwardButton;
