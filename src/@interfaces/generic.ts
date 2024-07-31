import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export type ButtonVariantT = "primary" | "secondary" | "default" | "text" | "link";
export type ButtonSizeT = "small" | "medium" | "large";
type ButtonTypeT = "button" | "submit" | "reset"


export interface ButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariantT;
  type?: ButtonTypeT;
  size?: ButtonSizeT;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface GetButtonStyleParamsI {
  variant: ButtonVariantT;
  size: ButtonSizeT;
  className?: string;
}

export interface CustomInputHTMLAttributes<T> extends Omit<InputHTMLAttributes<T>, 'size'> {
  size?: "small" | "medium" | "large";
}

export interface InputPropI extends CustomInputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "number" | "email" | "search" | "tel" | "url" | "date" | "datetime" | "month" | "week" | "time" | "datetime-local" | "range" | "color";
  placeholder?: string;
  className?: string;
}