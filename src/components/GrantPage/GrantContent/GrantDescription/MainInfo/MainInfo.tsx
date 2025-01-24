import { ReactElement } from "react";

const MainInfo = ({ description }): ReactElement => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default MainInfo;
