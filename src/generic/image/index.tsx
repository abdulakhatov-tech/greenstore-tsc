import { Image as ImageComp } from "antd";
import { FC, memo } from "react";
import { ImagePropsI } from "./types";

const GenericImage: FC<ImagePropsI> = memo(
  ({
    src,
    alt,
    width = "auto",
    height = "auto",
    visible = false,
    className,
    onClick,
    style = {},
    ...props
  }) => {
    const isSvg = src?.endsWith(".svg");

    if (!visible) {
      return (
        <img
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
    }

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
  }
);

export default GenericImage;
