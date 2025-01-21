import { ReactElement } from "react";
import { NavLink } from "react-router";

const GrandCardDescription = ({ id, title, description }): ReactElement => {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <NavLink to={`/grants/${id}`}>Подробнее о программе</NavLink>
      </div>
    </>
  );
};

export default GrandCardDescription;
