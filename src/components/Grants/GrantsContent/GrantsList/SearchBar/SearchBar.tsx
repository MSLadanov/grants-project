import { ReactElement } from "react";

const SearchBar = ({searchGrants, handleSearchChange }): ReactElement => {
  return (
    <div>
      <input onChange={(e) => handleSearchChange(e)}/>
      <button onClick={() => searchGrants()}>Искать</button>
    </div>
  );
};

export default SearchBar;
