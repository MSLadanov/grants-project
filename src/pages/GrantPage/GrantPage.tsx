import ErrorComponent from "@/components/ErrorComponent/Error";
import Footer from "@/components/GrantPage/Footer/Footer";
import GrantContent from "@/components/GrantPage/GrantContent/GrantContent";
import Header from "@/components/GrantPage/Header/Header";
import Loader from "@/components/Loader/Loader";
import { ReactElement, useEffect, useState } from "react";
import { useOutletContext } from "react-router";

const GrantPage = (): ReactElement => {
  const { data, isLoading, isError, grantId } = useOutletContext();
  const {grantData, setGrantData} = useState(null)
  useEffect(()=> {
    if(data){
      console.log(data.grants.find((item) => item.id === +grantId))
    }
  },[data, grantId])
  return (
    <>
      <Header />
      {data && !isLoading && !isError && <GrantContent />}
      {isLoading && !data && <Loader />}
      {isError && !isLoading && !data && <ErrorComponent />}
      <Footer />
    </>
  );
};

export default GrantPage;
