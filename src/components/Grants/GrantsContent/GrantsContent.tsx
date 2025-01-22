import { useEffect, useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";
import "./style.scss";

const GrantsContent = ({ grants }) => {
  const [grantsList, setGrantsList] = useState(grants);
  const [filteredGrantsList, setFilteredGrantsList] = useState(grants);
  const [directionsList, setDirectionsList] = useState([...new Set(grantsList.map((item) => item.direction))]);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const filteredGrants = grantsList.filter((item) => directionsList.includes(item.direction));
    if(amount !== null){
      const limit = +amount.split(' ')[1]
      const filteredAndLimitedGrants = filteredGrants.filter((item) => +item.amount.split(' ')[1] <= limit)
      setFilteredGrantsList(filteredAndLimitedGrants)
    } else {
      setFilteredGrantsList(filteredGrants);
    }
  }, [directionsList, grantsList, amount]);

  return (
    <div className="grant-content">
      <GrantsFilter
        directions={[...new Set(grantsList.map((item) => item.direction))]}
        amounts={[...new Set(grantsList.map((item) => item.amount))]}
        directionsList={directionsList}
        setDirectionsList={setDirectionsList}
        setAmount={setAmount}
      />
      <GrantsList grantsList={filteredGrantsList} />
    </div>
  );
};

export default GrantsContent;
