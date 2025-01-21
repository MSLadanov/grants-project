import { ReactElement } from "react";

const GrantsFilter = ({ directions }): ReactElement => {
  console.log(directions);
  return (
    <>
      <div>
        <h1>Фильтр</h1>
        <button>Сбросить</button>
      </div>
      <div>
        {directions.map((item, index) => (
          <div key={index}>
            <input id={item} type="checkbox"/>
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default GrantsFilter;
