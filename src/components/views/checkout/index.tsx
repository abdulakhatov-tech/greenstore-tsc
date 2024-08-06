import { FC } from "react";

import Container from "@layout/container";
import { BillingAddress, Header, Order } from "./customs";

const CheckoutComponent: FC = () => {
  return (
    <>
      <Header />
      <section>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-[1fr_350px] md:gap-x-[40px] lg:gap-[50px] xl:gap-[60px]'>
            <BillingAddress />
            <Order />
          </div>
        </Container>
      </section>
    </>
  );
};

export default CheckoutComponent;
