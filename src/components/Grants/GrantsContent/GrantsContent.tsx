import { useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";
import "./style.scss";

const GrantsContent = ({ grants }) => {
  const [grantsList, setGrantsList] = useState(grants);
  const [sortList, setSortList] = useState([]);
  return (
    <div className="grant-content">
      <GrantsFilter
        directions={[...new Set(grantsList.map((item) => item.direction))]}
        amounts={[...new Set(grantsList.map((item) => item.amount))]}
        setGrantsList={setGrantsList}
        sortList={sortList}
        setSortList={setSortList}
      />
      <GrantsList grantsList={grantsList} setGrantsList={setGrantsList} />
    </div>
  );
};

export default GrantsContent;
