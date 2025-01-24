import { ReactElement } from "react";
import Summary from "./Summary/Summary";
import MainInfo from "./MainInfo/MainInfo";
import Requirements from "./Requirements/Requirements";

const GrantDescription = ({grantData}): ReactElement => {
  const {application_period, due_date, amount, description, requirements} = grantData
  return (
    <div>
      <h1>Краткая информация</h1>
      <Summary applicationPeriod={application_period} dueDate={due_date} amount={amount} />
      <h1>Основные сведения о гранте</h1>
      <MainInfo description={description} />
      <h1>Требования</h1>
      <Requirements requirements={requirements} />
    </div>
  );
};

export default GrantDescription;
