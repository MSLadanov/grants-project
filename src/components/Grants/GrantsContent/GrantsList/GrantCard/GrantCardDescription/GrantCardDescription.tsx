import { ReactElement } from "react";
import { NavLink } from "react-router";
import './style.scss'

const GrandCardDescription = ({ id, title, description }): ReactElement => {
  return (
    <div className="grant-card-description">
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
