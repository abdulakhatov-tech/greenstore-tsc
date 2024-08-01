import { forwardRef, memo } from "react";
import { inputStyle } from "./style";
import { InputPropI } from "./types";

// Define the props with forwardRef
const Input = memo(
  forwardRef<HTMLInputElement, InputPropI>(
    (
      { type = "text", placeholder, size = "medium", className, ...props },
      ref
    ) => {
      return (
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputStyle({ size, className })}
          {...props}
        />
      );
    }
  )
);

export default Input;
