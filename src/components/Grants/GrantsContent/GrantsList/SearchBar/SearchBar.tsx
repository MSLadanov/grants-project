import { ReactElement } from "react";
import "./style.scss";
import search from '@/assets/search.svg'

const SearchBar = ({ searchGrants, handleSearchChange }): ReactElement => {
  return (
    <div className="grants-searchbar">
      <div className="grants-searchbar-input">
        <img src={search} alt="" />
        <input placeholder="Введите название программы" onChange={(e) => handleSearchChange(e)} />
      </div>
      <div className="grants-searchbar-btn">
        <button onClick={() => searchGrants()}>Искать</button>
      </div>
    </div>
  );
};

export default SearchBar;
