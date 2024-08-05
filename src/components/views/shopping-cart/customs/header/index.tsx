import { FC } from "react";
import Breadcrumbs from "@generic/breadcrumbs";
import Container from "@layout/container";

const Header:FC = () => {
   const routes = [
      {
         breadcrumbName: "Home",
         path: "/",
      },
      {
         breadcrumbName: "Shop",
         path: "/shop",
      },
      {
         breadcrumbName: "Shopping Cart",
         path: `/shop/shopping-cart`,
      },
   ];

   return (
      <section id="shopping-cart__header" className="py-[30px]">
         <Container>
            <Breadcrumbs routes={routes} />
         </Container>
      </section>
   );
};

export default Header;
