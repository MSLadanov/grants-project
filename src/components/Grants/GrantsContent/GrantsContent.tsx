import { useEffect, useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";
import "./style.scss";

const GrantsContent = ({ grants }) => {
  const [grantsList, setGrantsList] = useState(grants);
  const [sortedGrantsList, setSortedGransList] = useState(grantsList)
  const [sortList, setSortList] = useState([...new Set(grantsList.map((item) => item.direction))]);
  useEffect(() => {
    if(sortList.length){
      setSortedGransList(grantsList.filter((item) => sortList.includes(item.direction)))
    }
    console.log(sortedGrantsList)
  }, [sortList])
  return (
    <div className="grant-content">
      <GrantsFilter
        directions={[...new Set(grantsList.map((item) => item.direction))]}
        amounts={[...new Set(grantsList.map((item) => item.amount))]}
        sortList={sortList}
        setSortList={setSortList}
      />
      <GrantsList grantsList={grantsList}  />
    </div>
  );
};

export default GrantsContent;
