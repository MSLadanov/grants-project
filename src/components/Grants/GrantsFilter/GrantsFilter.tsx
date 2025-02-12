import { ReactElement, useContext } from "react";
import "./style.scss";
import { DateInput } from "@mantine/dates";
import GrantsContext from "@/contexts/GrantsContext";
import React from "react";

const GrantsFilter = (): ReactElement => {
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

  const handleReset = () => {
    setDirectionsList(directions);
    setAmount(null);
    setDateRange([null, null]);
  };

  return (
    <div className="filter">
      <div className="filter-header">
        <div className="filter-header-logo">
          <h3>Фильтр</h3>
        </div>
        <div className="grant-filter-divisor"></div>
        <div className="filter-header-reset">
          <button onClick={handleReset}>Сбросить</button>
        </div>
      </div>
      <div className="filter-body">
        <h4>Направление</h4>
        <div>
          {directions.map((item, index) => (
            <div key={index} className="direction">
              <input
                id={item}
                checked={directionsList.includes(item)}
                type="checkbox"
                onChange={(e) => handleDirection(e)}
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
                onChange={(e) => handleAmount(e)}
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
              onChange={(date) => setDateRange([date, dateRange[1]])}
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
              onChange={(date) => setDateRange([dateRange[0], date])}
            />
            <div
              className={"filter-date-icon" + (dateRange[1] ? " active" : "")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantsFilter;
