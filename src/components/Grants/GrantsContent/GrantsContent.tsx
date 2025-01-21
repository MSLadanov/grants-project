import { useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";

const GrantsContent = ({ grants }) => {
  const [grantsList, setGrantsList] = useState(grants);
  return (
    <>
      <GrantsFilter directions={[...new Set(grantsList.map((item) => item.direction))]} setGrantsList={setGrantsList} />
      <GrantsList grantsList={grantsList} setGrantsList={setGrantsList} />
    </>
  );
};

export default GrantsContent;
