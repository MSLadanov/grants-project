import { ReactElement } from "react";

const Header = ({grantData}): ReactElement => {
  return (
    <>
      <h1>{grantData?.title}</h1>
    </>
  );
};

export default Header;
