const descriptionFormatter = (description: string, length: number): string => { 
    if(description.length < length){
        return description
    }
  const ending = description.length < length ? "" : "...";
  const formattedString =
    description.slice(0, length).split(" ").slice(0, -1).join(" ") + ending;
  return formattedString;
};

export default descriptionFormatter;
