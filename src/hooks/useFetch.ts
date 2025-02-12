import { useEffect, useState } from "react";

const useFetch = <T,>(url: string): { data: T | null; isLoading: boolean; isError: boolean } => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Произошла ошибка!");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
