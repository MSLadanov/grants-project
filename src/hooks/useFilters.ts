import { TGrant } from "../types/types";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const useFilters = (
  directionsList: string[],
  amount: string | null,
  dateRange: [Date | null, Date | null],
  searchQuery: string
) => {
  const matchesDirection = (grant: TGrant) => {
    if (directionsList.length === 0) {
      return true;
    } else {
      return directionsList.includes(grant.direction);
    }
  };
  const matchesAmount = (grant: TGrant) => {
    if (amount === null) return true;
    const grantAmount = +grant.amount.split(" ")[1];
    const selectedAmount = +amount.split(" ")[1];
    return grantAmount <= selectedAmount;
  };
  const matchesDateRange = (grant: TGrant) => {
    if (!dateRange.every((date) => date !== null)) return true;
    return dayjs(grant.application_period.start).isBetween(
      dayjs(dateRange[0]),
      dayjs(dateRange[1]),
      null,
      "[]"
    );
  };
  return {
    matchesDirection,
    matchesAmount,
    matchesDateRange,
  };
};

export default useFilters;
