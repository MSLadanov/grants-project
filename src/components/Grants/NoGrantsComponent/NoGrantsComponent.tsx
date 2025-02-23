import { ReactElement } from "react";
import './style.scss'
import React from "react";

const NoGrantsComponent = () : ReactElement=> {
  return (
    <div className="no-grants">
      <h1>Нет грантов!</h1>
    </div>
  );
};

export default NoGrantsComponent