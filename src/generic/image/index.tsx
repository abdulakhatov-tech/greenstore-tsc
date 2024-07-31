import { Image as ImageComp } from "antd";
import { FC, memo } from "react";
import { ImagePropsI } from "./types";

const Image:FC<ImagePropsI> = memo(({
    src,
    alt,
    width = "auto",
    height = "auto",
    className,
    onClick,
    style={},
    ...props
 }) => {
    const isSvg = src?.endsWith(".svg");

    return (
       <ImageComp
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={isSvg ? undefined : "lazy"}
          style={style}
          onClick={onClick}
          {...props}
       />
    );
});

export default Image;
