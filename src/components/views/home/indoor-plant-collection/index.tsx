import { FC } from "react";
import Container from "@layout/container";
import { Categories, PlantGallery } from "./customs";

const IndoorPlantCollection:FC = () => {
  return <section id="indoor-plant-collection" className="py-[26px]">
    <Container>
        <div className="flex gap-7">
            <Categories />
            <PlantGallery />
        </div>
    </Container>
  </section>;
};

export default IndoorPlantCollection;
