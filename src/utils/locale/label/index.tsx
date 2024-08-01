import { FC } from "react";
import { LabelT } from "../types";



export const Label: FC<LabelT> = ({ src, alt, label }) => (
  <div className='flex items-center gap-2'>
    <img src={src} alt={alt} className='inline-block w-[30px] h-[20px]' />
    <span>{label}</span>
  </div>
);
