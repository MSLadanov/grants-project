import { ReactElement } from "react";
import GrandCardDescription from "./GrantCardDescription/GrantCardDescription";
import GrandCardInfo from "./GrantCardInfo/GrantCardInfo";

const GrantCard = ({ grant }): ReactElement => {
  const {id, title, description, grantor, application_period, amount } =
    grant;
  return (
    <>
      <GrandCardDescription id={id} title={title} description={description} />
      <GrandCardInfo grantor={grantor} application_period={application_period} amount={amount}  />
    </>
  );
};

export default GrantCard;
