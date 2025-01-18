import { ReactElement } from "react";
import { Outlet, useParams } from "react-router";
import Header from "@components/Grants/Header/Header";

const Grants = (): ReactElement => {
  const params = useParams();
  if (params.grantId) {
    return <Outlet />;
  }
  return (
    <>
      <h1>Grants</h1>
      <Header/>
    </>
  );
};

export default Grants;
