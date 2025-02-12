import { ReactElement } from "react";
import { NavLink } from "react-router";
import "./style.scss";
import React from "react";

const GrandCardDescription = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}): ReactElement => {
  return (
    <div className="grant-card-description">
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <NavLink to={`/grants/${id}`}>Подробнее о программе</NavLink>
      </div>
    </div>
  );
};

export default GrandCardDescription;
