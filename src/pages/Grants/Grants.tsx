import { ReactElement } from "react";
import { Outlet, useParams } from "react-router";
import Header from "@/components/Grants/Header/Header";
import Footer from "@/components/Grants/Footer/Footer";
import GrantsContent from "@/components/Grants/GrantsContent/GrantsContent";
import useFetch from "@/hooks/useFetch";

const Grants = (): ReactElement => {
  const params = useParams();
  const { data, isLoading, isError } = useFetch("/data.json");
  if (params.grantId) {
    return <Outlet />;
  }
  return (
    <>
      <Header />
      <GrantsContent />
      <Footer />
    </>
  );
};

export default Grants;
