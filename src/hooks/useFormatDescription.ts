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
  useEffect(() => {
    if (description.length < length) {
      return;
    }
    const ending = description.length < length ? "" : "...";
    setFormattedString(
      description.slice(0, length).split(" ").slice(0, -1).join(" ") + ending
    );
    setIsFormatted(true);
  }, [description, length]);
  return { formattedString, isFormatted };
};

export default useFormatDescription;
