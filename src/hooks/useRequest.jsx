import { useCallback, useEffect, useState } from "react";

// REQUEST DATA
export const useRequestData = (service, args, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  const getData = useCallback(
    async (options) => {
      setIsLoading(true);
      const r = await service({ ...args, ...options });
      if (r?.message) return setError({ hasError: true, ...r });
      setData(r.data);
      setIsLoading(false);
    },
    [args, service]
  );

  useEffect(() => {
    console.log({ service }, { args });
    if (service && args) {
      getData();
    }
  }, [service, args, getData]);

  return [data, getData];
};
