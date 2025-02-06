import dayjs from "dayjs";

const useFilters = (directionsList, amount, dateRange, searchQuery) => {
  const matchesDirection = (grant) => directionsList.includes(grant.direction);
  const matchesAmount = (grant) => {
    if (amount === null) return true;
    const grantAmount = +grant.amount.split(" ")[1];
    const selectedAmount = +amount.split(" ")[1];
    return grantAmount <= selectedAmount;
  };
  const matchesDateRange = (grant) => {
    if (!dateRange.every((date) => date !== null)) return true;
    return dayjs(grant.application_period.start).isBetween(
      dayjs(dateRange[0]),
      dayjs(dateRange[1]),
      null,
      "[]"
    );
  };
  const matchesSearchQuery = (grant) => {
    return Object.values(grant).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return {
    matchesDirection,
    matchesAmount,
    matchesDateRange,
    matchesSearchQuery,
  };
};

export default useFilters;
