import { useState, useEffect } from "react";

const useGetAllCurrency = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const myAbortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json", { signal: myAbortController.signal });
        if (response.ok) {
          const data = await response.json();
          setState({ ...data });
          setLoading(false);
        } else {
          throw new Error("Whoops!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      myAbortController.abort();
    };
  }, []);

  return [state, loading];
};

export default useGetAllCurrency;
