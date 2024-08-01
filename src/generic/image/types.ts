import { ImgHTMLAttributes } from "react";

export interface ImagePropsI extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  visible?: boolean;
}
