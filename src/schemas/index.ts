import { validatePlate } from "../lib/utils";
import { z } from "zod";

export const parkingSchema = z.object({
  plate: z
    .string()
    .nonempty("campo obrigatório")
    .refine((data) => validatePlate(data)),
});

export type parkingFormSchema = z.infer<typeof parkingSchema>;
