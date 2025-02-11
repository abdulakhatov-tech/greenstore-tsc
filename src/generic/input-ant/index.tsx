import { Input as InputComp, InputRef } from "antd";
import { forwardRef, memo, ForwardedRef, FC } from "react";
import { inputStyle } from "./style";
import { InputPropI } from "./types";

const Input:FC<InputPropI> = memo(
  forwardRef<InputRef, InputPropI>(
    (
      { type = "text", placeholder, size = "medium", className, ...props },
      ref: ForwardedRef<InputRef>
    ) => {

      if (type === "password") {
        return (
          <InputComp.Password
            ref={ref}
            placeholder={placeholder}
            className={inputStyle({size, className })}
            {...props}
          />
        );
      }

      return (
        <InputComp
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputStyle({size, className})}
          {...props}
        />
      );
    }
  )
);

export default Input;
