import { FC } from "react";
import Container from "@layout/container";
import { CartProducts, CartTotal } from "./customs";

const Main:FC = () => {
  return <section id="shopping-cart__main">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12 sm:gap-6 lg:gap-12 pb-10">
        <CartProducts />
        <CartTotal />
      </div>
    </Container>
  </section>;
};

export default Main;
