import { ReactElement, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import GrantCard from "./GrantCard/GrantCard";
import Pagination from "@/components/Grants/Pagination/Pagination";

const GrantsList = ({
  grantsList,
  searchGrants,
  handleSearchChange,
  clearSearchQuery,
  searchQuery,
}): ReactElement => {
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
        <h1>Нет грантов</h1>;
      </div>
    )
  }
  return (
    <div>
      <SearchBar
        searchGrants={searchGrants}
        handleSearchChange={handleSearchChange}
        clearSearchQuery={clearSearchQuery}
        searchQuery={searchQuery}
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
