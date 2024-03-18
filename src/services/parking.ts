import { parkingFormSchema } from "../schemas";
import axios from "../api";

export class ParkingService {
  public static async createParking(url: string, body: parkingFormSchema) {
    return await axios.post(url, body);
  }

  public static async getParking(url: string) {
    return await axios.get(url);
  }

  public static async createPayment(url: string) {
    return await axios.post(url);
  }

  public static async registerOut(url: string) {
    return await axios.post(url);
  }
}
