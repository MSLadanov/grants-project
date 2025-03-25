import { ReactElement } from "react";
import { Outlet, useParams } from "react-router";
import GrantsHeader from "@components/Grants/GrantsHeader/GrantsHeader";
import GrantsContent from "@/components/Grants/GrantsContent/GrantsContent";
import useFetch from "@hooks/useFetch";
import Loader from "@components/Loader/Loader";
import ErrorComponent from "@components/ErrorComponent/Error";
import { TGrantsData } from "@/types/types";

const Grants = (): ReactElement => {
  const { grantId } = useParams();
  const { data, isLoading, isError } = useFetch<TGrantsData>("./data.json");
  if (grantId) {
    return <Outlet context={{ data, isLoading, isError, grantId }} />;
  }
  return (
    <>
      <GrantsHeader />
      {data && <GrantsContent grants={data.grants} />}
      {isLoading && <Loader />}
      {isError && <ErrorComponent />}
    </>
  );
};

export default Grants;
