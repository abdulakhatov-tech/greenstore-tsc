import { InputHTMLAttributes } from "react";

export interface CustomInputHTMLAttributes<T>
  extends Omit<InputHTMLAttributes<T>, "size"> {
  size?: "small" | "medium" | "large";
}

export interface InputPropI
  extends CustomInputHTMLAttributes<HTMLInputElement> {
  type?:
    | "text"
    | "password"
    | "number"
    | "email"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime"
    | "month"
    | "week"
    | "time"
    | "datetime-local"
    | "range"
    | "color";
  placeholder?: string;
  className?: string;
}

export interface InputStyleProps {
    size: "small" | "medium" | "large";
    className?: string;
}