import { ReactElement } from "react";
import './style.scss';
import CustomDatePicker from "./CustomDatePicker/CustomDatePicker";

const GrantsFilter = ({ directions, amounts, directionsList, setDirectionsList, setAmount, dateRange, setDateRange }): ReactElement => {
  const handleDirection = (e) => {
    const id = e.target.id;
    if (directionsList.includes(id)) {
      const updatedList = directionsList.filter(item => item !== id);
      setDirectionsList(updatedList);
    } else {
      setDirectionsList(prevList => [...prevList, id]);
    }
  };

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleReset = () => {
    setDirectionsList(directions);
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
            <input id={item} checked={directionsList.includes(item)} type="checkbox" onChange={(e) => handleDirection(e)} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <div>
        {amounts.map((item, index) => (
          <div key={index}>
            <input id={item} value={item} name='amount' type="radio" onChange={(e) => handleAmount(e)} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <div>
        <CustomDatePicker dateRange={dateRange} setDateRange={setDateRange}/>
      </div>
    </div>
  );
};

export default GrantsFilter;
