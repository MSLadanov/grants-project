import { ReactElement } from "react";

const SearchBar = ({ setSearchQuery, searchGrants }): ReactElement => {
  return (
    <>
      <input onChange={(e) => setSearchQuery(e.target.value)}/>
      <button onClick={() => searchGrants()}>Искать</button>
    </>
  );
};

export default SearchBar;
