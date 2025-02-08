import { ReactElement, useContext, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import GrantCard from "../GrantCard/GrantCard";
import Pagination from "@/components/Grants/Pagination/Pagination";
import "./style.scss";
import GrantsMobileMenu from "../GrantsMobileMenu/GrantsMobileMenu";
import GrantsContext from "@/contexts/GrantsContext";
import { TGrant } from "@/types/types";
import NoGrantsComponent from "../NoGrantsComponent/NoGrantsComponent";

const GrantsList = (): ReactElement => {
  const {
    grantsList,
    searchGrants,
    handleSearchChange,
    clearSearchQuery,
    searchQuery,
    toggleModal,
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
          toggleModal={toggleModal}
        />
        <NoGrantsComponent/>
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
        toggleModal={toggleModal}
      />
      {paginatedGrants.map((grant : TGrant) => (
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
