import { DatePicker } from "@mantine/dates";
import "dayjs/locale/ru";
import { ReactElement, useContext } from "react";
import "./style.scss";
import GrantsContext from "@contexts/GrantsContext";

const CustomDatePicker = (): ReactElement => {
  const {
    dateRange,
    setDateRange,
  } = useContext(GrantsContext);
  return (
    <DatePicker
      type="range"
      monthLabelFormat={"MMMM"}
      styles={{
        levelsGroup:{
          width: '200px'
        }
      }}
      locale="ru"
      value={dateRange}
      size="xs"
      onChange={setDateRange}
      hideOutsideDates
    />
  );
};

export default CustomDatePicker;
