import { ReactElement } from "react";
import GrandCardDescription from "../GrantCardDescription/GrantCardDescription";
import GrandCardInfo from "../GrantCardInfo/GrantCardInfo";
import "./style.scss";
import { TGrant } from "../../../types/types";
import React from "react";

const GrantCard = ({ grant }: { grant: TGrant }): ReactElement => {
  const { id, title, description, grantor, application_period, amount } = grant;
  return (
    <div className="grant-card">
      <GrandCardDescription id={id} title={title} description={description} />
      <GrandCardInfo
        grantor={grantor}
        application_period={application_period}
        amount={amount}
      />
    </div>
  );
};

export default GrantCard;
