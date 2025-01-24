import { ReactElement } from "react";
import BackwardButton from "./BackwardButton/BackwardButton";
import GrantDescription from "./GrantDescription/GrantDescription";
import SectionMenu from "./SectionMenu/SectionMenu";

const GrantContent = ({ grantData }): ReactElement => {
  console.log(grantData);
  return (
    <>
      <BackwardButton />
      <GrantDescription />
      <SectionMenu />
    </>
  );
};

export default GrantContent;
