import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validatePlate(sequence: string): boolean {
  const regex = /^[a-zA-Z]{3}-[0-9]{4}$/;

  return regex.test(sequence);
}

export function maskPlate(valor: string) {
  const valorLimpo = valor.replace(/[^a-zA-Z0-9]/g, "");

  const letras = valorLimpo.substring(0, 3).replace(/[0-9]/g, "").toUpperCase();
  const numeros = valorLimpo.substring(3).replace(/\D/g, "").substring(0, 4);

  let valorFormatado = letras + (numeros.length > 0 ? "-" + numeros : "");

  if (valor.length < valorFormatado.length && valor.endsWith("-")) {
    valorFormatado = valorFormatado.slice(0, -1);
  }

  return valorFormatado;
}

export const throwErrors = (error: any, toast: any) => {
  const errorProperties = Object.keys(error.response.data.errors);
  errorProperties.forEach((property) => {
    const errorMessage = error.response.data.errors[property];
    errorMessage.forEach((message: string) => {
      toast.error(message);
    });
  });
};
