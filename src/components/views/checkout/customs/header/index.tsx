import Breadcrumbs from "@generic/breadcrumbs";
import Container from "@layout/container";
import { BreadcrumbRoutesI } from "@type/index";

const Header = () => {
  const routes: BreadcrumbRoutesI[] = [
    {
      breadcrumbName: "Home",
      path: "/",
    },
    {
      breadcrumbName: "Shop",
      path: "/shop",
    },
    {
      breadcrumbName: "Checkout",
      path: `/shop/checkout`,
    },
  ];

  return (
    <section id='shopping-cart__header' className='py-[30px]'>
      <Container>
        <Breadcrumbs routes={routes} />
      </Container>
    </section>
  );
};

export default Header;
