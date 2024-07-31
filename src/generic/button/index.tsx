import { forwardRef, memo } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { getButtonStyle } from "./style";
import { ButtonPropsI } from "@type/generic";

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonPropsI>(
    (
      {
        children,
        variant = "default",
        type = "button",
        size = "medium",
        loading = false,
        leftIcon,
        rightIcon,
        className,
        onClick,
        ...props
      },
      ref
    ) => {

      return (
        <button
          ref={ref}
          type={type}
          className={getButtonStyle({ variant, size, className })}
          onClick={onClick}
          {...props}
        >
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
          {loading && <LoadingOutlined />}
        </button>
      );
    }
  )
);

export default Button;
