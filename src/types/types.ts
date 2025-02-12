export type TGrant = {
  id: number;
  direction: string;
  title: string;
  description: string;
  grantor: string;
  application_period: {
    start: string;
    end: string;
  };
  amount: string;
  requirements: string;
  due_date: string;
};

export type TGrantsData = {
  grants: TGrants;
  data: {
    grants: TGrant;
  };
};

export type TGrants = TGrant[];

export interface GrantsContextType {
  directions: string[];
  amount: string | null;
  amounts: string[];
  directionsList: string[];
  setDirectionsList: (dirs: string[]) => void;
  setAmount: (amount: string | null) => void;
  dateRange: [Date | null, Date | null];
  setDateRange: (dates: [Date | null, Date | null]) => void;
  grantsList: TGrant[];
  searchGrants: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearchQuery: () => void;
  searchQuery: string;
  toggleModal: () => void;
}
