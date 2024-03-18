import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { parkingFormSchema, parkingSchema } from "../../schemas";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { maskPlate } from "../../lib/utils";

import { usePayment } from "../../hooks/usePayment";
import { useOut } from "../../hooks/useOut";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
export function Exit() {
  const navigate = useNavigate();

  const {
    register,
    getValues,
    control,
    formState: { isValid },
  } = useForm<parkingFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(parkingSchema),
    defaultValues: {
      plate: "",
    },
  });

  const [switchType, setSwitchType] = useState("");
  const [modalState, setModalState] = useState({
    title: "",
    description: "",
    open: false,
  });
  const { registerPayment } = usePayment(`${getValues("plate")}/pay`);
  const { registerOut } = useOut(`${getValues("plate")}/out`);

  function onHandleModalPayment() {
    setSwitchType("pay");
    setModalState({
      title: "Confirmar o pagamento da placa abaixo?",
      description: getValues("plate"),
      open: true,
    });
  }

  function onHandleModalOut() {
    setSwitchType("out");
    setModalState({
      title: "Confirmar a saída do veiculo da placa abaixo",
      description: getValues("plate"),
      open: true,
    });
  }

  function onHandlePayment() {
    registerPayment();
    setModalState({
      title: "",
      description: "",
      open: false,
    });
  }

  function onHandleOut() {
    registerOut();
    setModalState({
      title: "",
      description: "",
      open: false,
    });
  }

  return (
    <>
      <Card>
        <CardContent className="gap-4 py-3 space-y-2">
          <div className="my-2">
            <Label className="mb-2">Número da placa:</Label>
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
          </div>
          <Button
            type="submit"
            className="w-full bg-secondary"
            disabled={!isValid}
            onClick={() => onHandleModalPayment()}
          >
            Pagamento
          </Button>
          <Button
            className="w-full border-secondary"
            disabled={!isValid}
            variant="outline"
            onClick={() => onHandleModalOut()}
          >
            Saída
          </Button>

          <Button
            variant={"link"}
            className="w-full"
            disabled={!isValid}
            onClick={() => navigate(`/history/${getValues("plate")}`)}
          >
            Ver histórico
          </Button>
        </CardContent>
      </Card>

      <AlertDialog open={modalState.open}>
        <AlertDialogContent>
          <AlertDialogHeader className="flex items-center">
            <AlertDialogTitle>{modalState.title}</AlertDialogTitle>
            <AlertDialogDescription className="text-lg font-bold">
              {modalState.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col items-center w-full gap-2">
            <AlertDialogAction
              className="w-full"
              onClick={() =>
                switchType === "pay" ? onHandlePayment() : onHandleOut()
              }
            >
              Confirmar
            </AlertDialogAction>
            <AlertDialogCancel
              onClick={() =>
                setModalState({ description: "", title: "", open: false })
              }
              className="w-full"
            >
              Voltar
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
