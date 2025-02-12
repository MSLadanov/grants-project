import React, { forwardRef, useContext } from "react";
import "./style.scss";
import { DateInput } from "@mantine/dates";
import GrantsContext from "@/contexts/GrantsContext";
import dayjs from "dayjs";

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

  const handleStartDateBlur = (value: string) => {
    try {
      const dateValue = dayjs(value, "DD/MM/YYYY");
      if (dateValue.isValid()) {
        setDateRange([dateValue.toDate(), dateRange[1]]);
      } else {
        console.error("Некорректная дата начала:", value);
      }
    } catch (error) {
      console.error("Ошибка при установке даты начала:", error);
    }
  };

  const handleEndDateBlur = (value: string) => {
    try {
      const dateValue = dayjs(value, "DD/MM/YYYY");
      if (dateValue.isValid()) {
        setDateRange([dateRange[0], dateValue.toDate()]);
      } else {
        console.error("Некорректная дата окончания:", value);
      }
    } catch (error) {
      console.error("Ошибка при установке даты окончания:", error);
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
            <DateInput
              className={dateRange[0] ? "active" : ""}
              valueFormat="DD/MM/YYYY"
              label="Начало периода"
              placeholder="23/10/2023"
              value={dateRange[0] || null}
              onBlur={(event) => handleStartDateBlur(event.target.value)}
            />
            <div
              className={"filter-date-icon" + (dateRange[0] ? " active" : "")}
            ></div>
          </div>
          <div className="filter-date-indicator">
            <DateInput
              className={dateRange[1] ? "active" : ""}
              valueFormat="DD/MM/YYYY"
              label="Конец периода"
              placeholder="01/12/2023"
              value={dateRange[1] || null}
              onBlur={(event) => handleEndDateBlur(event.target.value)}
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
