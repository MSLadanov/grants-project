import { ReactElement } from "react";
import BackwardButton from "../BackwardButton/BackwardButton";
import GrantDescription from "../GrantDescription/GrantDescription";
import SectionMenu from "../SectionMenu/SectionMenu";
import './style.scss'
import { TGrant } from "../../../types/types";
import React from "react";

const GrantContent = ({ grantData } : {grantData : TGrant}): ReactElement => {
  return (
    <div className="grantpage-content">
      <BackwardButton />
      <GrantDescription grantData={grantData} />
      <SectionMenu />
    </div>
  );
};

export default GrantContent;
