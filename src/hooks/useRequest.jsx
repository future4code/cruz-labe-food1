import { useCallback, useEffect, useState } from "react";

// REQUEST DATA CUSTOM HOOK
export const useRequestData = (service, initialValue, args) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(async (options) => {
    try {
      const r = await service({ ...args, ...options });

      if (r?.message) {
        return setIsError(r);
      }

      if (args?.selectProp && r?.[args.selectProp]) {
        setData(r?.[args.selectProp]);
      } else setData(r);
    } catch (e) {
      console.error(e);
      setIsError(e);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return [data, isLoading, isError, getData];
};
