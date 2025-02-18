import ErrorComponent from "../../components/ErrorComponent/Error";
import GrantContent from "../../components/GrantPage/GrantContent/GrantContent";
import GrantHeader from "../../components/GrantPage/GrantHeader/GrantHeader";
import Loader from "../../components/Loader/Loader";
import { TGrant } from "../../types/types";
import { ReactElement, useEffect, useState } from "react";
import { useOutletContext } from "react-router";

interface GrantPageContext {
  data: {
    grants: Array<TGrant>;
  };
  isLoading: boolean;
  isError: boolean;
  grantId: string;
}

const GrantPage = (): ReactElement => {
  const { data, isLoading, isError, grantId } =
    useOutletContext<GrantPageContext>();
  const [grantData, setGrantData] = useState<TGrant | null>(null);

  useEffect(() => {
    if (data) {
      const foundGrant = data.grants.find((item) => item.id === +grantId);
      setGrantData(foundGrant || null);
    }
  }, [data, grantId]);

  return (
    <>
      <GrantHeader grantData={grantData!} />
      {isLoading && <Loader />}
      {isError && !isLoading && <ErrorComponent />}
      {grantData && !isLoading && !isError ? (
        <GrantContent grantData={grantData} />
      ) : (
        !isLoading && <ErrorComponent />
      )}
    </>
  );
};

export default GrantPage;
