import { FC } from "react";
import { ContainerPropsI } from "./types";

const Container: FC<ContainerPropsI> = ({ children, size }) => {
  if (size === "fluid") {
    return <div className='container-fluid'>{children}</div>;
  }

  return <div className='container mx-auto'>{children}</div>;
};

export default Container;
