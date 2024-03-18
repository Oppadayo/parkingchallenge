import { useFetch } from "../../hooks/useFetch";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Parking } from "../../interface";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "../ui/alert-dialog";

import ArrowLeft from "../../assets/icons/arrow_l.svg?react";
import { useState } from "react";

export function History() {
  const { plate } = useParams<{ plate: string }>();
  const navigate = useNavigate();

  const { response } = useFetch<Parking[]>(`/${plate}`);
  const [open, setOpen] = useState(false);
  const [parking, setParking] = useState<Parking>();

  function onHandleParkinInfo(history: Parking) {
    setParking(history);
    setOpen(true);
  }

  return (
    <>
      <Card className="w-screen mt-6 md:w-[500px]">
        <CardHeader>
          <div className="flex items-center space-x-6">
            <Button variant="link" onClick={() => navigate(-1)}>
              {<ArrowLeft className="text-primary" />}
            </Button>
            <CardTitle className="text-primary">Placa {plate}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="gap-4 py-3 space-y-2">
          {response?.map((history) => (
            <Card
              key={history.reservation}
              onClick={() => onHandleParkinInfo(history)}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p>Tempo atual</p>
                  <p className="text-xl font-semibold">{history.time}</p>
                </div>

                <div>
                  <p>Pagamento</p>
                  <p className="text-xl font-semibold">
                    {history.paid ? "Pago" : "---"}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader className="flex items-start">
            <Button variant="link" onClick={() => setOpen(false)}>
              {<ArrowLeft className="text-primary" />}
            </Button>
          </AlertDialogHeader>

          <div className="space-y-4">
            <div>
              <p>Placa</p>
              <p className="text-xl font-bold text-primary">{parking?.plate}</p>
            </div>

            <div>
              <p>Status</p>
              <p className="text-xl font-bold">
                {parking?.left ? "Saída" : "Estacionado"}
              </p>
            </div>

            <div>
              <p>Tempo atual</p>
              <p className="text-xl font-bold">{parking?.time}</p>
            </div>

            <div>
              <p>Pagamento</p>
              <p className="text-xl font-bold">
                {parking?.paid ? "Pago" : "---"}
              </p>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
