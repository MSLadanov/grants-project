import { createContext } from "react";
import { GrantsContextType } from "@/types/types";

const GrantsContext  = createContext<GrantsContextType>({
  directions: [],
  amount: null,
  amounts: [],
  directionsList: [],
  setDirectionsList: (dirs : string[]) => {},
  setAmount: (amount : string | null) => {},
  dateRange: [null, null],
  setDateRange: (dates : [Date | null, Date | null]) => {},
  grantsList: [],
  searchGrants: () => {},
  handleSearchChange: (e : React.ChangeEvent<HTMLInputElement >) => {},
  clearSearchQuery: () => {},
  searchQuery: '',
  toggleModal: () => {},
});

export default GrantsContext;

