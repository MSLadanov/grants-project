import { ReactElement } from "react";
import dateFormatter from "@/utils/dateFormatter";
import "./style.scss";

const GrandCardInfo = ({
  grantor,
  application_period,
  amount,
}): ReactElement => {
  return (
    <div className="grant-card-info">
      <div className="grant-card-info-content">
        <div>
          <h3>Кто оказывает услуги</h3>
          <h4>{grantor}</h4>
        </div>
        <div>
          <h3>Статус конкурса</h3>
          <h4>{`Прием заявок с ${dateFormatter(
            application_period.start
          )} по ${dateFormatter(application_period.end)}`}</h4>
        </div>
        <div>
          <h3>Размер гранта</h3>
          <h4>{amount}</h4>
        </div>
      </div>
    </div>
  );
};

export default GrandCardInfo;
