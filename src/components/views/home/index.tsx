import { FC, Fragment } from "react";
import Intro from "./Intro";
import IndoorPlantCollection from "./indoor-plant-collection";

const HomeComponent:FC = () => {
  return <Fragment>
    <Intro />
    <IndoorPlantCollection />
  </Fragment>;
};

export default HomeComponent;
