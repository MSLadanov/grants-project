import { ReactElement } from "react";
import { Outlet, useParams } from "react-router";

const Grants = (): ReactElement => {
  const params = useParams();
  if (params.grantId) {
    return <Outlet />;
  }
  return (
    <>
      <h1>Grants</h1>
    </>
  );
};

export default Grants;
