import React, { forwardRef, useContext } from "react";
import "./style.scss";
import { DateInput } from "@mantine/dates";
import GrantsContext from "../../../contexts/GrantsContext";
import { InputBase } from "@mantine/core";
import { IMaskInput } from "react-imask";
import dayjs from "dayjs";
import customParseFormat from 'dayjs'
dayjs.extend(customParseFormat)

const GrantsMobileFilter = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<object>
>((props, ref) => {
  const {
    directions,
    amount,
    amounts,
    directionsList,
    setDirectionsList,
    setAmount,
    dateRange,
    setDateRange,
  } = useContext(GrantsContext);

  const handleDirection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    if (directionsList.includes(id)) {
      const updatedList = directionsList.filter((item) => item !== id);
      setDirectionsList(updatedList);
    } else {
      const newDirectionsList = [...directionsList, id];
      setDirectionsList(newDirectionsList);
    }
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const formatDate = (date : Date | null) => {
    if (!date) return "23/10/2023";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); 
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateBlur = (value: string, position: 'start' | 'end') => {
    try {
      const dateArr = value.split('/').map(Number)
      const d = new Date(dateArr[2], dateArr[1], dateArr[0])
      console.log(d)
      const dateValue = dayjs(d, "DD/MM/YYYY");
      if (dateValue.isValid()) {
        setDateRange([dateValue.toDate(), position === 'start' ? dateRange[1] : dateRange[0] ]);
      } else {
        console.error(`Некорректная дата ${position === 'start' ? 'начала' : 'конца'}:`, value);
      }
    } catch (error) {
      console.error(`Ошибка при установке даты ${position === 'start' ? 'начала' : 'конца'}:`, error);
    }
  };

  return (
    <div className="filter-mobile" ref={ref}>
      <div className="filter-body">
        <h4>Направление</h4>
        <div>
          {directions.map((item, index) => (
            <div key={index} className="direction">
              <input
                id={item}
                checked={directionsList.includes(item)}
                type="checkbox"
                onChange={handleDirection}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
        <h4>Размер</h4>
        <div>
          {amounts.map((item, index) => (
            <div key={index} className="amount">
              <input
                id={item}
                value={item}
                name="amount"
                type="radio"
                checked={amount === item}
                onChange={handleAmount}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
        <h4>Период</h4>
        <div className="filter-date-group">
          <div className="filter-date-indicator">
            {/* <DateInput
              className={dateRange[0] ? "active" : ""}
              valueFormat="DD/MM/YYYY"
              label="Начало периода"
              placeholder="23/10/2023"
              value={dateRange[0] || null}
              onBlur={(event) => handleStartDateBlur(event.target.value)}
            /> */}
            <InputBase
              className={dateRange[1] ? "active" : ""}
              label="Начало периода"
              component={IMaskInput}
              mask="00/00/0000"
              placeholder="23/10/2023"
              value={formatDate(dateRange[0])}
              onBlur={(event) => handleDateBlur(event.target.value, 'start')}
            />
            <div
              className={"filter-date-icon" + (dateRange[0] ? " active" : "")}
            ></div>
          </div>
          <div className="filter-date-indicator">
            {/* <DateInput
              className={dateRange[1] ? "active" : ""}
              valueFormat="DD/MM/YYYY"
              label="Конец периода"
              placeholder="01/12/2023"
              value={dateRange[1] || null}
              onBlur={(event) => handleEndDateBlur(event.target.value)}
            /> */}
            <InputBase
              className={dateRange[1] ? "active" : ""}
              label="Конец периода"
              component={IMaskInput}
              mask="00/00/0000"
              placeholder="01/12/2023"
              onBlur={(event) => handleDateBlur(event.target.value, 'end')}
            />
            <div
              className={"filter-date-icon" + (dateRange[1] ? " active" : "")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default GrantsMobileFilter;
