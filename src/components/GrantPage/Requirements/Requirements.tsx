import { ReactElement } from "react";
import './style.scss'

const Requirements = ({ requirements } : { requirements : string}): ReactElement => {
  return (
    <div className="grant-requirements" id="requirements">
      <p>{requirements}</p>
    </div>
  );
};

export default Requirements;
