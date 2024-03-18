import { throwErrors } from "../lib/utils";

import { toast } from "react-toastify";
import { ParkingService } from "../services/parking";

export const usePost = (url: string) => {
  const createParking = async (body: any) => {
    try {
      await ParkingService.createParking(url, body);
      toast.success("Veiculo cadastrado");
    } catch (error) {
      throwErrors(error, toast);
    }
  };

  return {
    createParking,
  };
};
