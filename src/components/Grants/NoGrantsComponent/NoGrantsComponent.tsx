import { ReactElement } from "react";
import './style.scss'
import React from "react";

const NoGrantsComponent = () : ReactElement=> {
  return (
    <div className="no-grants">
      <h3>Нет грантов по данному запросу!</h3>
    </div>
  );
};

export default NoGrantsComponent