import { ReactElement } from "react";
import "./style.scss";
import search from "@assets/search.svg";
import clear from "@assets/clear.svg";
import React from "react";

const SearchBar = ({
  searchGrants,
  handleSearchChange,
  clearSearchQuery,
  searchQuery,
}: {
  searchGrants: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearchQuery: () => void;
  searchQuery: string;
}): ReactElement => {
  return (
    <div className="grants-searchbar">
      <div className="grants-searchbar-input">
        <img src={search} alt="" />
        <input
          placeholder="Введите название программы"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e)}
        />
        <img src={clear} onClick={() => clearSearchQuery()} alt="" />
      </div>
      <div className="grants-searchbar-btn">
        <button onClick={() => searchGrants()}>Искать</button>
      </div>
    </div>
  );
};

export default SearchBar;
