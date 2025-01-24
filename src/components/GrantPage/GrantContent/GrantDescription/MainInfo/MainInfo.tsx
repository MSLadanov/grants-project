import { ReactElement } from "react";

const MainInfo = ({ description }): ReactElement => {
  console.log(description)
  return (
    <div>
      <h1>Main info</h1>
    </div>
  );
};

export default MainInfo;
