import { useEffect, useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";
import "./style.scss";

const GrantsContent = ({ grants }) => {
  const [grantsList, setGrantsList] = useState(grants);
  const [sortedGrantsList, setSortedGrantsList] = useState(grants);
  const [directionsList, setDirectionsList] = useState([...new Set(grantsList.map((item) => item.direction))]);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const filteredByDirectionGrants = grantsList.filter((item) => directionsList.includes(item.direction));
    setSortedGrantsList(filteredByDirectionGrants);
    console.log(amount)
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
      <GrantsList grantsList={sortedGrantsList} />
    </div>
  );
};

export default GrantsContent;
