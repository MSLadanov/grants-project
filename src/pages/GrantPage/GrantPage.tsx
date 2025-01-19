import Footer from "@/components/GrantPage/Footer/Footer";
import GrantContent from "@/components/GrantPage/GrantContent/GrantContent";
import Header from "@/components/GrantPage/Header/Header";
import { ReactElement } from "react";

const GrantPage = (): ReactElement => {
  return (
    <>
      <Header />
      <GrantContent />
      <Footer />
    </>
  );
};

export default GrantPage;
