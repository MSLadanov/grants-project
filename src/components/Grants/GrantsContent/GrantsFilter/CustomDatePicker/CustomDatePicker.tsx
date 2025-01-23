import { DatePicker } from "@mantine/dates";
import 'dayjs/locale/ru';
import { ReactElement, useState } from "react";
import './style.scss'

const CustomDatePicker = (): ReactElement => {
    const [value, setValue] = useState<Date | null>(null);
    return <DatePicker locale="ru" allowDeselect value={value} onChange={setValue} />;
};

export default CustomDatePicker;
