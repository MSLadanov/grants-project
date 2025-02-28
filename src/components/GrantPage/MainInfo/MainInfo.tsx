import { ReactElement } from "react";
import './style.scss'
import React from "react";

const MainInfo = ({ description } : { description : string}): ReactElement => {
  return (
    <div className="grant-maininfo" id="main-info">
      <p>{description}</p>
    </div>
  );
};

export default MainInfo;
