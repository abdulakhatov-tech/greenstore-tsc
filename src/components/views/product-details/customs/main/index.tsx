import { FC } from "react";
import { Content, ProductImageGallery } from "./customs";

const Main:FC = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9 lg:gap-10 ">
    <ProductImageGallery />
    <Content />
  </div>;
};

export default Main;
