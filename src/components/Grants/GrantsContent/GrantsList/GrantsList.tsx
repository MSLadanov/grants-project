import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import GrantCard from "./GrantCard/GrantCard";

const GrantsList = ({ grantsList, setSearchQuery, searchGrants }): ReactElement => {
  if (grantsList.length === 0) {
    return (
      <>
        <h1>Нет грантов</h1>
      </>
    );
  }
  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} searchGrants={searchGrants}/>
      {grantsList.map((grant) => (
        <GrantCard key={grant.id} grant={grant} />
      ))}
    </div>
  );
};

export default GrantsList;
