import { throwErrors } from "../lib/utils";

import { toast } from "react-toastify";
import { ParkingService } from "../services/parking";
import { useState } from "react";

export const useOut = (url: string) => {
  const [outLoading, setOutLoading] = useState(false);

  const registerOut = async () => {
    try {
      setOutLoading(true);
      await ParkingService.registerOut(url);
      toast.success("Saída liberada");
    } catch (error) {
      throwErrors(error, toast);
    } finally {
      setOutLoading(false);
    }
  };

  return {
    registerOut,
    outLoading,
  };
};
