import { createContext } from "react";

const GrantsContext = createContext({
  directions: [],
  amount: null,
  amounts: [],
  directionsList: [],
  setDirectionsList: (dirs : string[]) => {},
  setAmount: (amount : string[]) => {},
  dateRange: null,
  setDateRange: (dates : [Date | null, Date | null]) => {},
  grantsList: [],
  searchGrants: () => {},
  handleSearchChange: (e : React.ChangeEvent<HTMLInputElement >) => {},
  clearSearchQuery: () => {},
  searchQuery: '',
  toggleModal: () => {},
});

export default GrantsContext;

