import { Input as InputC, InputRef } from 'antd'
import { forwardRef, memo } from "react";
import { inputStyle } from "./style";
import { InputPropI } from "./types";

const Input = memo(
  forwardRef<InputRef , InputPropI>(
    (
      { type = "text", placeholder, size = "large", className, circle, ...props },
      ref
    ) => {

      if(type === 'password') {
        return (
          <InputC.Password
            ref={ref}
            placeholder={placeholder}
            className={inputStyle({ size, className })}
            {...props}
          />
        );
      }

      return (
        <InputC
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputStyle({ size, className, circle })}
          {...props}
        />
      );
    }
  )
);

export default Input;
