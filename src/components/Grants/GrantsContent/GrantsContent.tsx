import { useEffect, useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";
import "./style.scss";

const GrantsContent = ({ grants }) => {
  const [grantsList, setGrantsList] = useState(grants);
  const [sortedGrantsList, setSortedGrantsList] = useState(grants);
  const [sortList, setSortList] = useState([...new Set(grantsList.map((item) => item.direction))]);

  useEffect(() => {
    const filteredGrants = grantsList.filter((item) => sortList.includes(item.direction));
    setSortedGrantsList(filteredGrants);
  }, [sortList, grantsList]);

  return (
    <div className="grant-content">
      <GrantsFilter
        directions={[...new Set(grantsList.map((item) => item.direction))]}
        amounts={[...new Set(grantsList.map((item) => item.amount))]}
        sortList={sortList}
        setSortList={setSortList}
      />
      <GrantsList grantsList={sortedGrantsList} />
    </div>
  );
};

export default GrantsContent;
