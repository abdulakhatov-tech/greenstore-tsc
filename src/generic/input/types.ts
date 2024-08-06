import { InputHTMLAttributes } from "react";

export interface CustomInputHTMLAttributes<T>
  extends Omit<InputHTMLAttributes<T>, "size"> {
  size?: "small" | "medium" | "large";
}

export type InputT =
  | "text"
  | "password"
  | "number"
  | "email"
  | "search"
  | "tel"
  | "url"

export type InputTypeT = "small" | "medium" | "large";

export interface InputPropI
  extends CustomInputHTMLAttributes<HTMLInputElement> {
  type?: InputT;
  placeholder?: string;
  className?: string;
  addonBefore?: string;
  circle?: boolean;
}

export interface InputStyleProps {
  size: InputTypeT;
  className?: string;
  circle?: boolean
}

export type SizeClassesT = {
  small: string;
  medium: string;
  large: string;
};