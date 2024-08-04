import { FC } from "react";
import { Header, Products } from "./customs";

const PlantGallery: FC = () => {
  return <div className="w-full flex flex-col gap-7">
    <Header />
    <Products />
  </div>;
};

export default PlantGallery;
