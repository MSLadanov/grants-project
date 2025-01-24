import { ReactElement } from "react";
import Summary from "./Summary/Summary";
import MainInfo from "./MainInfo/MainInfo";
import Requirements from "./Requirements/Requirements";

const GrantDescription = ({grantData}): ReactElement => {
  const {application_period, due_date, amount, description, requirements} = grantData
  console.log(application_period, due_date, amount, description, requirements)
  return (
    <div>
      <h1>Краткая информация</h1>
      <Summary />
      <h1>Основные сведения о гранте</h1>
      <MainInfo />
      <h1>Требования</h1>
      <Requirements />
    </div>
  );
};

export default GrantDescription;
