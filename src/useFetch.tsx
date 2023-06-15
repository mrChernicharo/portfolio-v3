import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch(url, { cache: "force-cache" })
      .then((res) => res.json())
      .then((data: T) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    error,
    loading,
  };
}
