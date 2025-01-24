import { ReactElement } from "react";
import BackwardButton from "./BackwardButton/BackwardButton";

const GrantContent = ({ grantData }): ReactElement => {
  console.log(grantData);
  return (
    <>
      <BackwardButton/>
      <h1>Grant Content</h1>
    </>
  );
};

export default GrantContent;
