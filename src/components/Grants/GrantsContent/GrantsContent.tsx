import { useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";
import './style.scss'

const GrantsContent = ({ grants }) => {
  const [grantsList, setGrantsList] = useState(grants);
  return (
    <div className="grant-content">
      <GrantsFilter directions={[...new Set(grantsList.map((item) => item.direction))]} setGrantsList={setGrantsList} />
      <GrantsList grantsList={grantsList} setGrantsList={setGrantsList} />
    </div>
  );
};

export default GrantsContent;
