import { ReactElement } from "react";
import './style.scss'

const GrantsFilter = ({ directions, amounts }): ReactElement => {
  return (
    <div>
      <div className="filter-header">
        <div>
          <h1>Фильтр</h1>
        </div>
        <div>
          <button>Сбросить</button>
        </div>
      </div>
      <div>
        {directions.map((item, index) => (
          <div key={index}>
            <input id={item} type="checkbox" />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <div>
      {amounts.map((item, index) => (
          <div key={index}>
            <input id={item} type="radio" />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default GrantsFilter;
