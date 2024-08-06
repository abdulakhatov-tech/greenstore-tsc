import { InputStyleProps, SizeClassesT } from "./types";

const sizeClasses:SizeClassesT = {
  small: 'px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] text-[14px] sm:text-[16px] leading-6',
  medium: 'px-[14px] sm:px-[16px] py-[5px] sm:py-[6px] text-[15px] sm:text-[17px] leading-6',
  large: 'px-[18px] sm:px-[20px] py-[7px] sm:py-[8px] text-[16px] sm:text-[18px] leading-6',
}

const textStyle:string = 'text-black placeholder-gray focus:placeholder-custom-green'
const boxStyle:string = 'bg-transparent focus:bg-transparent rounded-[5px] border-1 border-[#E8E8E8] hover:border-green focus:border-green'
const ringStyle:string = 'focus:outline-none focus:ring-2 focus:ring-[#46A358] focus:ring-opacity-50'

const cirlce = 'rounded-full'

export const inputStyle = ({
  size,
  className = "",
  circle
}: InputStyleProps): string => {
  return `${textStyle} ${boxStyle} ${ringStyle} ${sizeClasses[size]} ${cirlce ? circle : ''} ${className}`;
};
