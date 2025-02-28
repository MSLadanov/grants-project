import { ReactElement, useEffect, useState } from "react";
import dateFormatter from "../../../utils/dateFormatter";
import sectionsOpen from "../../../assets/sections-open.svg";
import sectionsClose from "../../../assets/sections-close.svg";
import "./style.scss";
import useModal from "../../../hooks/useModal";
import MobileSectionMenu from "../MobileSectionMenu/MobileSectionMenu";
import React from "react";

interface SummaryProps {
  applicationPeriod: { start: string; end: string };
  dueDate: string;
  amount: string;
}

const Summary = ({
  applicationPeriod,
  dueDate,
  amount,
}: SummaryProps): ReactElement => {
  const {
    Modal,
    isModalOpened,
    setIsModalOpened,
    toggleShadowBox
  } = useModal(<MobileSectionMenu />, false);
  
  const toggleModal = () => {
    setIsModalOpened(prev => !prev);
  };

  return (
    <div className="grant-summary" id="summary">
      <div className="grant-summary-column">
        <div className="grant-summary-cell">
          <p>Статус конкурса:</p>
          <p>Активный</p>
        </div>
        <div className="grant-summary-cell">
          <h3>Подача заявок</h3>
          <h3>до {dateFormatter(applicationPeriod.end)}</h3>
        </div>
      </div>
      <div className="grant-summary-column">
        <div className="grant-summary-cell">
          <p>Срок выполнения гранта:</p>
        </div>
        <div className="grant-summary-cell">
          <h3>{dueDate}</h3>
        </div>
      </div>
      <div className="grant-summary-column">
        <div className="grant-summary-cell">
          <p>Размер гранта:</p>
        </div>
        <div className="grant-summary-cell">
          <h3>{amount}</h3>
        </div>
      </div>
      <div className="grant-sections-toggler">
        <img
          src={isModalOpened ? sectionsClose : sectionsOpen}
          onClick={() => {
            toggleModal()
            toggleShadowBox()
          }
          }
          alt=""
        />
      </div>
      <Modal />
    </div>
  );
};

export default Summary;
