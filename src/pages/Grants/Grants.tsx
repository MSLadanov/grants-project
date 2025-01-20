import { ReactElement } from "react";
import { Outlet, useParams } from "react-router";
import Header from "@/components/Grants/Header/Header";
import Footer from "@/components/Grants/Footer/Footer";
import GrantsContent from "@/components/Grants/GrantsContent/GrantsContent";
import useFetch from "@/hooks/useFetch";
import Loader from "@/components/Loader/Loader";
import ErrorComponent from "@/components/ErrorComponent/Error";

const Grants = (): ReactElement => {
  const { grantId } = useParams();
  const { data, isLoading, isError } = useFetch("/data.json");
  if (grantId) {
    return <Outlet context={{ data, isLoading, isError, grantId }} />;
  }
  return (
    <>
      <Header />
      {data && <GrantsContent />}
      {isLoading && <Loader />}
      {isError && <ErrorComponent />}
      <Footer />
    </>
  );
};

export default Grants;
