import { ReactElement } from "react";
import { NavLink } from "react-router";
import useFormatDescription from "../../../hooks/useFormatDescription";
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
  const { formattedString, isFormatted } = useFormatDescription(description, 200)
  return (
    <div className="grant-card-description">
      <div className="description-text">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          {isFormatted && <p>{formattedString}</p>}
        </div>
        <div className="description-blur"></div>
      </div>
      <div>
        <hr />
        <NavLink to={`/grants/${id}`}>Подробнее о программе</NavLink>
      </div>
    </div>
  );
};

export default GrandCardDescription;
