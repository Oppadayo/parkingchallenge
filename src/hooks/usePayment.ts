import { throwErrors } from "../lib/utils";

import { toast } from "react-toastify";
import { ParkingService } from "../services/parking";

export const usePayment = (url: string) => {
  const registerPayment = async () => {
    try {
      await ParkingService.createPayment(url);
      toast.success("Pagamento efetuado");
    } catch (error) {
      throwErrors(error, toast);
    }
  };

  return {
    registerPayment,
  };
};
