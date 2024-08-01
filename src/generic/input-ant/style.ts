import { InputStyleProps } from "./types";

const sizeClasses = {
  small:
    "h-[30px] md:h-[35px] px-[10px] md:px-[12px] text-[10px] md:text-[12px] lg:text-[14px]",
  medium:
    "h-[35px] md:h-[40px] px-[12px] md:px-[14px] text-[12px] md:text-[14px] lg:text-[16px]",
  large:
    "h-[40px] md:h-[45px] px-[14px] md:px-[16px] text-[14px] md:text-[16px] lg:text-[18px]",
};

export const inputStyle = ({
  size,
  className = "",
}: InputStyleProps): string => {
  return `bg-transparent placeholder-custom-green focus:bg-transparent placeholder-gray text-black border-green outline-green focus:border-green focus:outline-green hover:border-green hover:outline-green ${sizeClasses[size]} ${className}`;
};
