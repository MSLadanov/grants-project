import { useState } from "react";

const CustomCheckBox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return <div className={"checkbox" + checked ? "checked" : ""}></div>;
};

export default CustomCheckBox;
