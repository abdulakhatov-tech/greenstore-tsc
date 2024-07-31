import { GetButtonStyleParamsI } from "@interfaces/generic";

// tailwind classes for each button type
const variantClasses = {
  primary: "bg-green text-white border-green",
  secondary: "bg-white text-green border-green",
  default: "text-gray border-gray focus:border-green focus:text-green",
  text: "text-green border-transparent",
  link: "text-green border-transparent underline",
};

// Tailwind classes for each button size
const sizeClasses = {
  small:
    "h-[30px] md:h-[35px] px-[10px]  md:px-[12px] text-[10px] md:text-[12px] lg:text-[14px]",
  medium:
    "h-[35px] md:h-[40px]  px-[12px] md:px-[14px] text-[12px] md:text-[14px] lg:text-[16px]",
  large:
    "h-[40px] md:h-[45px] px-[14px] md:px-[16px] text-[14px] md:text-[16px] lg:text-[18px]",
};

const textStyle = "font-normal m-1";
const boxStyle =
  "flex gap-2 items-center justify-center rounded-md active:scale-[0.98] transition-all border-[1px]";



export const getButtonStyle = ({ variant, size, className }: GetButtonStyleParamsI) => {
  return `${textStyle} ${boxStyle} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
};
