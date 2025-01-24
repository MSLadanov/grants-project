import { ReactElement } from "react";

const Summary = ({ applicationPeriod, dueDate, amount }): ReactElement => {
  console.log(applicationPeriod, dueDate, amount);
  return (
    <div>
      <h1>Summary</h1>
    </div>
  );
};

export default Summary;
