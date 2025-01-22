import { ReactElement } from "react";
import './style.scss'

const GrantsFilter = ({ directions, amounts, sortList, setSortList }): ReactElement => {
  const handleDirection = (e) => {
    const id = e.target.id;
    if (sortList.includes(id)) {
      const updatedList = sortList.filter(item => item !== id);
      setSortList(updatedList);
    } else {
      setSortList(prevList => [...prevList, id]);
    }
    console.log(sortList);
  };
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
            <input id={item} checked={sortList.includes(item)} type="checkbox" onChange={(e) => handleDirection(e)} />
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
