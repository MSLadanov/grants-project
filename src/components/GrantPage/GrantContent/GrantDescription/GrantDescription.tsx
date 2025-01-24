import { ReactElement } from "react";
import Summary from "./Summary/Summary";
import MainInfo from "./MainInfo/MainInfo";
import Requirements from "./Requirements/Requirements";

const GrantDescription = (): ReactElement => {
  return (
    <div>
      <Summary />
      <MainInfo />
      <Requirements />
    </div>
  );
};

export default GrantDescription;
