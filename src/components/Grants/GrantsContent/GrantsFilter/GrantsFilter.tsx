import { ReactElement, useState } from "react";
import "./style.scss";
import CustomDatePicker from "./CustomDatePicker/CustomDatePicker";

const GrantsFilter = ({
  directions,
  amounts,
  directionsList,
  setDirectionsList,
  setAmount,
  dateRange,
  setDateRange,
}): ReactElement => {
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

  const handleReset = () => {
    setDirectionsList(directions);
  };

  const [startDateActive, setStartDateActive] = useState(false);
  const [endDateActive, setEndDateActive] = useState(false);

  const handleStartDateFocus = () => {
    setStartDateActive(true);
  };

  const handleStartDateBlur = () => {
    setStartDateActive(false);
  };

  const handleEndDateFocus = () => {
    setEndDateActive(true);
  };

  const handleEndDateBlur = () => {
    setEndDateActive(false);
  };

  return (
    <div>
      <div className="filter-header">
        <div>
          <h1>Фильтр</h1>
        </div>
        <div>
          <button onClick={handleReset}>Сбросить</button>
        </div>
      </div>
      <div>
        {directions.map((item, index) => (
          <div key={index}>
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
      <div>
        {amounts.map((item, index) => (
          <div key={index}>
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
      <div className="filter-date-group">
        <div className="filter-date-indicator">
          <label htmlFor="date-start">Начало периода</label>
          <input
            className={startDateActive ? "active" : ""}
            onFocus={handleStartDateFocus}
            onBlur={handleStartDateBlur}
            type="date"
            name="date-start"
            id="date-start"
          />
        </div>
        <div className="filter-date-indicator">
          <label htmlFor="date-start">Конец периода</label>
          <input
            className={endDateActive ? "active" : ""}
            onFocus={handleEndDateFocus}
            onBlur={handleEndDateBlur}
            type="date"
            name="date-start"
            id="date-start"
          />
        </div>
      </div>
      <div className="filter-datepicker">
        <CustomDatePicker dateRange={dateRange} setDateRange={setDateRange} />
      </div>
    </div>
  );
};

export default GrantsFilter;
