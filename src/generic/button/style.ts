import { GetButtonStyleParamsI } from "./types";

// tailwind classes for each button type
const variantClasses = {
  primary: "bg-green text-white border-green",
  secondary: "bg-transparent text-green border-green",
  default: "text-gray border-gray focus:border-green focus:text-green",
  text: "text-green border-transparent bg-transparent",
  link: "text-green border-transparent underline bg-transparent",
};

// Tailwind classes for each button size
const sizeClasses = {
  small:
    "h-[25px] sm:h-[30px] md:h-[35px] px-[6px] sm:px-[8px] md:px-[10px] lg:px-[12px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]",
  medium:
    "h-[30px] sm:h-[35px] md:h-[40px]  px-[8px] sm:px-[10px] md:px-[12px] lg:px-[14px] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]",
  large:
    "h-[35px] sm:h-[40px] md:h-[45px] px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]",
};

const textStyle = "font-normal m-1";
const boxStyle =
  "flex gap-2 items-center justify-center rounded-md active:scale-[0.98] transition-all border-[1px]";



export const getButtonStyle = ({ variant, size, className }: GetButtonStyleParamsI) => {
  return `${textStyle} ${boxStyle} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
};
