import { ReactElement } from "react";
import './style.scss'
import React from "react";

const Requirements = ({ requirements }): ReactElement => {
  return (
    <div className="grant-requirements">
      <p>{requirements}</p>
    </div>
  );
};

export default Requirements;
