import { useEffect, useState } from "react";
import GrantsFilter from "../GrantsFilter/GrantsFilter";
import GrantsList from "../GrantsList/GrantsList";
import "./style.scss";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import useModal from "@/hooks/useModal";
import GrantsContext from "@/contexts/GrantsContext";
import useFilters from "@/hooks/useFilters";
import { TGrants } from "@/types/types";
import GrantsMobileFilter from "../GrantsMobileFilter/GrantsMobileFilter";
import React from "react";

dayjs.extend(isBetween);

const GrantsContent = ({ grants }: { grants: TGrants }) => {
  const { toggleModal, Modal } = useModal(<GrantsMobileFilter />);
  const [grantsList] = useState(grants);
  const [filteredGrantsList, setFilteredGrantsList] = useState(grants);
  const [directionsList, setDirectionsList] = useState([
    ...new Set(grantsList.map((item) => item.direction)),
  ]);
  const [amount, setAmount] = useState<null | string>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    matchesDirection,
    matchesAmount,
    matchesDateRange,
    matchesSearchQuery,
  } = useFilters(directionsList, amount, dateRange, searchQuery);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const searchGrants = () => {
    const searchedGrantsList = grantsList.filter((grant) => {
      return Object.values(grant).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredGrantsList(searchedGrantsList);
  };

  const filterGrants = () => {
    const filteredGrants = grantsList.filter((grant) => {
      return (
        matchesDirection(grant) &&
        matchesAmount(grant) &&
        matchesDateRange(grant) &&
        matchesSearchQuery(grant)
      );
    });
    setFilteredGrantsList(filteredGrants);
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
    filterGrants();
  };

  useEffect(() => {
    filterGrants();
  }, [directionsList, grantsList, amount, dateRange, searchQuery]);

  return (
    <GrantsContext.Provider
      value={{
        directions: [...new Set(grantsList.map((item) => item.direction))],
        amount: amount,
        amounts: [...new Set(grantsList.map((item) => item.amount))],
        directionsList,
        setDirectionsList,
        setAmount,
        dateRange,
        setDateRange,
        grantsList: filteredGrantsList,
        searchGrants,
        handleSearchChange,
        clearSearchQuery,
        searchQuery,
        toggleModal,
      }}
    >
      <div className="grants-content">
        <GrantsFilter />
        <Modal />
        <GrantsList />
      </div>
    </GrantsContext.Provider>
  );
};

export default GrantsContent;
