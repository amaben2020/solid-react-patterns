import { useCallback, useEffect, useState } from "react";

type TApiRespose<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

const useFetch = <T>(URL: string): TApiRespose<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const info = await response.json();
      setData(info);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) setError(error);
    }
  }, [URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;

// const {data} = useFetch<{message: string}>("")
