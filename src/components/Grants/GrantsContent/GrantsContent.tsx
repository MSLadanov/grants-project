import { useEffect, useState } from "react";
import GrantsFilter from "./GrantsFilter/GrantsFilter";
import GrantsList from "./GrantsList/GrantsList";
import "./style.scss";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import Pagination from "../Pagination/Pagination";
dayjs.extend(isBetween);

const GrantsContent = ({ grants }) => {
  const PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [grantsList, setGrantsList] = useState(grants);
  const [filteredGrantsList, setFilteredGrantsList] = useState(grants);
  const [directionsList, setDirectionsList] = useState([
    ...new Set(grantsList.map((item) => item.direction)),
  ]);
  const [amount, setAmount] = useState(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const paginatedGrants = filteredGrantsList.slice(firstPageIndex, lastPageIndex);

  const searchGrants = () => {
    const searchedGrantsList = filteredGrantsList.filter((grant) => {
      return Object.values(grant).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredGrantsList(searchedGrantsList);
  };

  useEffect(() => {
    const filteredGrants = grantsList.filter((item) => {
      const matchesDirection = directionsList.includes(item.direction);
      const matchesAmount =
        amount === null || +item.amount.split(" ")[1] <= +amount.split(" ")[1];
      const matchesDateRange = dateRange.every((date) => date !== null)
        ? dayjs(item.application_period.start).isBetween(
            dayjs(dateRange[0]),
            dayjs(dateRange[1]),
            null,
            "[]"
          )
        : true;
      const matchesSearchQuery = Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return (
        matchesDirection &&
        matchesAmount &&
        matchesDateRange &&
        matchesSearchQuery
      );
    });

    setFilteredGrantsList(filteredGrants);
  }, [directionsList, grantsList, amount, dateRange]);

  return (
    <div className="grant-content">
      <GrantsFilter
        directions={[...new Set(grantsList.map((item) => item.direction))]}
        amounts={[...new Set(grantsList.map((item) => item.amount))]}
        directionsList={directionsList}
        setDirectionsList={setDirectionsList}
        setAmount={setAmount}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <GrantsList
        grantsList={paginatedGrants}
        setSearchQuery={setSearchQuery}
        searchGrants={searchGrants}
      />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={filteredGrantsList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default GrantsContent;
