import { ReactNode, ButtonHTMLAttributes } from "react";

export type ThemeT = "light" | "dark";
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
  theme?: ThemeT;
}

export interface GetButtonStyleParamsI {
  variant: ButtonVariantT;
  size: ButtonSizeT;
  className?: string;
  theme?: ThemeT;
}