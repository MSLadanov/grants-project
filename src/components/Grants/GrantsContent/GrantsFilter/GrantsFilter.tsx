import { ReactElement } from "react";
import "./style.scss";
import CustomDatePicker from "./CustomDatePicker/CustomDatePicker";
import { DateInput } from "@mantine/dates";

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

  return (
    <div className="filter">
      <div className="filter-header">
        <div>
          <h1>Фильтр</h1>
        </div>
        <div>
          <button onClick={handleReset}>Сбросить</button>
        </div>
      </div>
      <div className="filter-body">
        <h3>Направление</h3>
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
        <h3>Размер</h3>
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
        <h3>Период</h3>
        <div className="filter-date-group">
          <div className="filter-date-indicator">
            <DateInput
              className={dateRange[0] && " active"}
              valueFormat="DD/MM/YYYY"
              label="Начало периода"
              placeholder="23/10/2023"
              value={dateRange[0]}
              disabled
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
              disabled
            />
            <div
              className={"filter-date-icon" + (dateRange[1] ? " active" : "")}
            ></div>
          </div>
        </div>
        <div className="filter-datepicker">
          <CustomDatePicker dateRange={dateRange} setDateRange={setDateRange} />
        </div>
      </div>
    </div>
  );
};

export default GrantsFilter;
