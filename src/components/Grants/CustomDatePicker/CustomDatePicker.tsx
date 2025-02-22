import { DatePicker } from "@mantine/dates";
import "dayjs/locale/ru";
import { ReactElement, useContext } from "react";
import "./style.scss";
import React from "react";
import GrantsContext from "../../../contexts/GrantsContext";

const CustomDatePicker = (): ReactElement => {
  const {
    dateRange,
    setDateRange,
  } = useContext(GrantsContext);
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
