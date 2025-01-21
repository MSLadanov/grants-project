import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import GrantCard from "./GrantCard/GrantCard";

const GrantsList = ({grantsList}): ReactElement => {
  return (
    <>
      <SearchBar />
      {grantsList.map((grant) => <GrantCard grant={grant}/>)}
      
    </>
  );
};

export default GrantsList;
