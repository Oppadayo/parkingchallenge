import { ParkingService } from "../services/parking";

import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<unknown>();

  const fetchParking = async () => {
    try {
      const { data } = await ParkingService.getParking(url);

      setResponse(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchParking();
  }, [url]);

  return {
    response,
    error,
  };
};
