import { ReactElement } from "react";
import "./style.scss";

type TCustomCheckBoxProps = {
  id: string;
  checked: boolean;
  handleDirection: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const CustomCheckBox = ({
  id,
  checked,
  handleDirection,
}: TCustomCheckBoxProps): ReactElement => {
  return (
    <div
      className={checked ? "checkbox checked" : "checkbox"}
      id={id}
      onClick={(e) => handleDirection(e)}
    >
      {checked && <div className="check"></div>}
    </div>
  );
};

export default CustomCheckBox;
