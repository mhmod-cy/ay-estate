import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)