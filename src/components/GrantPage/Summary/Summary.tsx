import { ReactElement } from "react";
import dateFormatter from "@/utils/dateFormatter";
import "./style.scss";

const Summary = ({ applicationPeriod, dueDate, amount }): ReactElement => {
  return (
    <div className="grant-summary">
      <div className="grant-summary-column">
        <div className="grant-summary-cell">
          <p>Статус конкурса:</p>
          <p>Активный</p>
        </div>
        <div className="grant-summary-cell">
          <h3>Подача заявок</h3>
          <h3>до {dateFormatter(applicationPeriod.end)}</h3>
        </div>
      </div>
      <div className="grant-summary-column">
        <div className="grant-summary-cell">
          <p>Срок выполнения гранта:</p>
        </div>
        <div className="grant-summary-cell">
          {" "}
          <h3>{dueDate}</h3>
        </div>
      </div>
      <div className="grant-summary-column">
        <div className="grant-summary-cell">
          <p>Размер гранта:</p>
          <div className="grant-summary-cell">
            <h3>{amount}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
