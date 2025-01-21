import { ReactElement } from "react";
import { NavLink } from "react-router";

const GrandCardDescription = ({ id, title, description }): ReactElement => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <NavLink to={`/grants/${id}`}>Подробнее о программе</NavLink>
      </div>
    </div>
  );
};

export default GrandCardDescription;
