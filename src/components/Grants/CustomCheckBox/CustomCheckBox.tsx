import { ReactElement, useState } from "react";
import "./style.scss";

type TCustomCheckBoxProps = {
    checked: boolean
}

const CustomCheckBox = ({ checked } : TCustomCheckBoxProps): ReactElement => {
  return <div className={checked ? "checkbox checked" : "checkbox"}></div>;
};

export default CustomCheckBox;
