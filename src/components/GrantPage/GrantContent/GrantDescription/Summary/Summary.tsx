import { ReactElement } from "react";
import dateFormatter from "@/utils/dateFormatter";
import './style.scss'

const Summary = ({ applicationPeriod, dueDate, amount }): ReactElement => {
  return (
    <div className="grant-summary">
      <div>
        <p>Статус конкурса:</p>
        <p>Активный</p>
        <h3>Подача заявок</h3>
        <h3>до {dateFormatter(applicationPeriod.end)}</h3>
      </div>
      <div>
        <p>Срок выполнения гранта:</p>
        <h3>{dueDate}</h3>
      </div>
      <div>
        <p>Размер гранта:</p>
        <h3>{amount}</h3>
      </div>
    </div>
  );
};

export default Summary;
