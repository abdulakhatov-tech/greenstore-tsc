import { FC } from "react";
import { FooterTitlePropsI } from "./types";

const FooterTitle:FC<FooterTitlePropsI> = ({ children, className }) => (
   <h3 className={`text-[18px] font-bold leading-[22px] ${className}`}>
      {children}
   </h3>
);

export default FooterTitle;
