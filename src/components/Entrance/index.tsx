import { maskPlate } from "../../lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { usePost } from "../../hooks/usePost";
import { parkingFormSchema, parkingSchema } from "../../schemas";

export function Entrance() {
  const { createParking } = usePost("");

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<parkingFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(parkingSchema),
    defaultValues: {
      plate: "",
    },
  });

  async function onHandleSubmit(data: parkingFormSchema) {
    createParking(data);
  }

  return (
    <Card>
      <CardContent className="gap-4 py-3 space-y-2">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="my-2">
            <Label htmlFor="plate" className="mb-2">
              Número da placa:
            </Label>
            <Controller
              control={control}
              name="plate"
              render={({ field: { onChange, value } }) => (
                <Input
                  id="plate"
                  type="text"
                  placeholder="ABC-123"
                  {...register("plate")}
                  onChange={(e) => onChange(maskPlate(e.target.value))}
                  value={value}
                />
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={!isValid}>
            Confirmar entrada
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
