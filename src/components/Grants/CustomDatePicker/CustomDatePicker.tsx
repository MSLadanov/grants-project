import { DatePicker } from "@mantine/dates";
import "dayjs/locale/ru";
import { ReactElement } from "react";
import "./style.scss";
import React from "react";

const CustomDatePicker = ({ dateRange, setDateRange }): ReactElement => {
  return (
    <DatePicker
      type="range"
      monthLabelFormat={"MMMM"}
      locale="ru"
      value={dateRange}
      onChange={setDateRange}
      hideOutsideDates
    />
  );
};

export default CustomDatePicker;
