import { DatePicker } from "@mantine/dates";
import "dayjs/locale/ru";
import { ReactElement, useState } from "react";
import "./style.scss";

const CustomDatePicker = (): ReactElement => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <DatePicker type="range" locale="ru" value={value} onChange={setValue} />
  );
};

export default CustomDatePicker;
