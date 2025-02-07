import { ReactElement } from "react";
import './style.scss'

const MainInfo = ({ description }): ReactElement => {
  return (
    <div className="grant-maininfo">
      <p>{description}</p>
    </div>
  );
};

export default MainInfo;
