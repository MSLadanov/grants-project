import { createContext } from "react";

const GrantsContext = createContext({
  directions: [],
  amount: null,
  amounts: [],
  directionsList: [],
  setDirectionsList: (dirs) => {},
  setAmount: (amount) => {},
  dateRange: null,
  setDateRange: (dates) => {},
  grantsList: [],
  searchGrants: () => {},
  handleSearchChange: (e) => {},
  clearSearchQuery: () => {},
  searchQuery: '',
  toggleFilterModal: () => {},
  handleOutSideClick: () => {},
});

export default GrantsContext;

