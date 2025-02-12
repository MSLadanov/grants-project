import { TGrant } from "@/types/types";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const useFilters = (directionsList: string[], amount: string | null, dateRange: [Date | null, Date | null], searchQuery: string) => {
  const matchesDirection = (grant : TGrant) => directionsList.includes(grant.direction);
  const matchesAmount = (grant : TGrant) => {
    if (amount === null) return true;
    const grantAmount = +grant.amount.split(" ")[1];
    const selectedAmount = +amount.split(" ")[1];
    return grantAmount <= selectedAmount;
  };
  const matchesDateRange = (grant : TGrant) => {
    if (!dateRange.every((date) => date !== null)) return true;
    return dayjs(grant.application_period.start).isBetween(
      dayjs(dateRange[0]),
      dayjs(dateRange[1]),
      null,
      "[]"
    );
  };
  const matchesSearchQuery = (grant : TGrant) => {
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
