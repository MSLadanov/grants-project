import { ReactElement } from "react";
import BackwardButton from "./BackwardButton/BackwardButton";
import GrantDescription from "./GrantDescription/GrantDescription";
import SectionMenu from "./SectionMenu/SectionMenu";

const GrantContent = ({ grantData }): ReactElement => {
  console.log(grantData);
  return (
    <div className="grant-content">
      <BackwardButton />
      <GrantDescription />
      <SectionMenu />
    </div>
  );
};

export default GrantContent;
