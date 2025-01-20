import ErrorComponent from "@/components/ErrorComponent/Error";
import Footer from "@/components/GrantPage/Footer/Footer";
import GrantContent from "@/components/GrantPage/GrantContent/GrantContent";
import Header from "@/components/GrantPage/Header/Header";
import Loader from "@/components/Loader/Loader";
import { ReactElement, useEffect, useState } from "react";
import { useOutletContext } from "react-router";

const GrantPage = (): ReactElement => {
  const { data, isLoading, isError, grantId } = useOutletContext();
  const [grantData, setGrantData] = useState(null);

  useEffect(() => {
    if (data) {
      const foundGrant = data.grants.find((item) => item.id === +grantId);
      setGrantData(foundGrant || null);
    }
  }, [data, grantId]);

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      {isError && !isLoading && <ErrorComponent />}
      {grantData && !isLoading && !isError ? (
        <GrantContent grantData={grantData} />
      ) : (
        !isLoading && <ErrorComponent />
      )}
      <Footer />
    </>
  );
};

export default GrantPage;
