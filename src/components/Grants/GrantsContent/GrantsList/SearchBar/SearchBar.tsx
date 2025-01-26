import { ReactElement } from "react";

const SearchBar = ({ setSearchQuery, searchGrants }): ReactElement => {
  return (
    <div>
      <input onChange={(e) => setSearchQuery(e.target.value)}/>
      <button onClick={() => searchGrants()}>Искать</button>
    </div>
  );
};

export default SearchBar;
