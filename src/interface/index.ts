export interface Parking {
  time: string;
  paid: boolean;
  left: boolean;
  plate: string;
  reservation: string;
}

export interface ErrorResponse {
  data: {
    errors: Record<string, string[]>;
  };
  response: {
    data: ErrorResponse["data"];
  };
}
