import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import GrantCard from "./GrantCard/GrantCard";

const GrantsList = (): ReactElement => {
  return (
    <>
      <SearchBar />
      <GrantCard />
    </>
  );
};

export default GrantsList;
