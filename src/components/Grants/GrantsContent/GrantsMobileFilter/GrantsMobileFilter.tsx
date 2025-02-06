import React, { forwardRef, useContext } from "react";
import "./style.scss";
import { DateInput } from "@mantine/dates";
import GrantsContext from "@/contexts/GrantsContext";

const GrantsMobileFilter = forwardRef((props, ref) => {
  const {
    directions,
    amounts,
    directionsList,
    setDirectionsList,
    setAmount,
    dateRange,
    setDateRange,
  } = useContext(GrantsContext);
  const handleDirection = (e) => {
    const id = e.target.id;
    if (directionsList.includes(id)) {
      const updatedList = directionsList.filter((item) => item !== id);
      setDirectionsList(updatedList);
    } else {
      setDirectionsList((prevList) => [...prevList, id]);
    }
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
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
              className={dateRange[0] && " active"}
              valueFormat="DD/MM/YYYY"
              label="Начало периода"
              placeholder="23/10/2023"
              value={dateRange[0]}
            />
            <div
              className={"filter-date-icon" + (dateRange[0] ? " active" : "")}
            ></div>
          </div>
          <div className="filter-date-indicator">
            <DateInput
              className={dateRange[0] ? " active" : ""}
              valueFormat="DD/MM/YYYY"
              label="Конец периода"
              placeholder="01/12/2023"
              value={dateRange[1]}
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
