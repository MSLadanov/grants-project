import { ReactElement, useContext, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import GrantCard from "./GrantCard/GrantCard";
import Pagination from "@/components/Grants/Pagination/Pagination";
import "./style.scss";
import GrantsMobileMenu from "../GrantsMobileMenu/GrantsMobileMenu";
import GrantsContext from "@/contexts/GrantsContext";

const GrantsList = (): ReactElement => {
  const {
    grantsList,
    searchGrants,
    handleSearchChange,
    clearSearchQuery,
    searchQuery,
    toggleFilterModal,
    handleOutSideClick,
  } = useContext(GrantsContext);
  const PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const paginatedGrants = grantsList.slice(firstPageIndex, lastPageIndex);
  if (grantsList.length === 0) {
    return (
      <div>
        <SearchBar
          searchGrants={searchGrants}
          handleSearchChange={handleSearchChange}
          clearSearchQuery={clearSearchQuery}
          searchQuery={searchQuery}
        />
        <GrantsMobileMenu
          toggleFilterModal={toggleFilterModal}
          handleOutSideClick={handleOutSideClick}
        />
        <h1>Нет грантов</h1>
      </div>
    );
  }
  return (
    <div className="grants-list">
      <SearchBar
        searchGrants={searchGrants}
        handleSearchChange={handleSearchChange}
        clearSearchQuery={clearSearchQuery}
        searchQuery={searchQuery}
      />
      <GrantsMobileMenu
        toggleFilterModal={toggleFilterModal}
        handleOutSideClick={handleOutSideClick}
      />
      {paginatedGrants.map((grant) => (
        <GrantCard key={grant.id} grant={grant} />
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={grantsList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default GrantsList;
