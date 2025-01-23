import { DatePicker } from "@mantine/dates";
import "dayjs/locale/ru";
import { ReactElement, useState } from "react";
import "./style.scss";

const CustomDatePicker = ({dateRange, setDateRange}): ReactElement => {
  return (
    <DatePicker type="range" locale="ru" value={dateRange} onChange={setDateRange} />
  );
};

export default CustomDatePicker;
