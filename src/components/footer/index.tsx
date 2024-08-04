import { FC, memo } from "react";

import Container from "@layout/container";
import {
  AllRightsReserved,
  ContactInfo,
  FooterNavigation,
  PlantShopFooter,
} from "./customs";

const Footer: FC = memo(() => {
  return (
    <footer id='footer'>
      <Container>
        <PlantShopFooter />
        <ContactInfo />
        <FooterNavigation />
        <AllRightsReserved />
      </Container>
    </footer>
  );
});

export default Footer;
