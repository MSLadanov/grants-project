import { ReactElement } from "react";
import "./style.scss";
import { NavLink } from "react-router";
import BackwardButton from "../BackwardButton/BackwardButton";
import { TGrant } from "@/types/types";

const GrantHeader = ({ grantData }: { grantData: TGrant }): ReactElement => {
  return (
    <div className="grant-header">
      <BackwardButton />
      <div className="grant-header-title">
        <h1>{grantData?.title}</h1>
      </div>
      {grantData && (
        <div className="grant-header-organizer">
          <h4>Организатор конкурса:</h4>
          <h3>{grantData?.grantor}</h3>
          <NavLink to={""}>Перейти на сайт</NavLink>
        </div>
      )}
      <NavLink to={""}>Перейти на сайт</NavLink>
    </div>
  );
};

export default GrantHeader;
