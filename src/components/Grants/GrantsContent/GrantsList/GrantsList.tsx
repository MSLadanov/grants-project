import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import GrantCard from "./GrantCard/GrantCard";

const GrantsList = ({grantsList}): ReactElement => {
  return (
    <div>
      <SearchBar/>
      {grantsList.map((grant) => <GrantCard key={grant.id} grant={grant}/>)}
    </div>
  );
};

export default GrantsList;
