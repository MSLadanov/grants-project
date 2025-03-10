import { useEffect, useState } from "react";

type TFormatted = {
  formattedString: string;
  isFormatted: boolean;
};

const useFormatDescription = (
  description: string,
  length: number
): TFormatted => {
  const [isFormatted, setIsFormatted] = useState<boolean>(false);
  const [formattedString, setFormattedString] = useState(description);
  useEffect(() => {}, [description, length]);
  if (description.length < length) {
    return { formattedString, isFormatted };
  }
  const ending = description.length < length ? "" : "...";
  setFormattedString(
    description.slice(0, length).split(" ").slice(0, -1).join(" ") + ending
  );
  setIsFormatted(true);
  return { formattedString, isFormatted };
};

export default useFormatDescription;
