import { GetButtonStyleParamsI, SizeClassesT, VariantClassesT } from "./types";

const ringStyle:string = 'focus:outline-none focus:ring-2 focus:ring-[#46A358] focus:ring-opacity-50'

// tailwind classes for each button type
const variantClasses:VariantClassesT = {
  primary: `bg-green text-white border-green ${ringStyle}`,
  secondary: `bg-transparent text-green border-green ${ringStyle}`,
  default: `text-gray border-gray focus:border-green focus:text-green ${ringStyle}`,
  text: "text-green border-transparent bg-transparent",
  link: "text-green border-transparent underline bg-transparent focus:text-[blue]",
};

const sizeClasses: SizeClassesT = {
  small: 'px-[10px] sm:px-[12px] py-[2px] sm:py-[4px] text-[14px] sm:text-[16px] leading-6',
  medium: 'px-[14px] sm:px-[16px] py-[4px] sm:py-[6px] text-[15px] sm:text-[17px] leading-6',
  large: 'px-[18px] sm:px-[20px] py-[6px] sm:py-[8px] text-[16px] sm:text-[18px] leading-6',
}

const textStyle:string = "font-medium";
const boxStyle:string =
  "flex gap-2 items-center justify-center rounded-md active:scale-[0.98] transition-all border-[1px]";

export const getButtonStyle = ({ variant, size, className }: GetButtonStyleParamsI): string => {
  return `${textStyle} ${boxStyle} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
};
