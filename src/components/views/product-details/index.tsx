import Container from "@layout/container";
import { FC } from "react";
import { Header, Main, ProductDescriptionAndReviews, RelatedProducts } from "./customs";

const ProductDetailsComponent:FC = () => {
  return <>
    <section>
        <Container>
            <div className="py-8 flex flex-col gap-8">
                <Header />
                <Main />
                <ProductDescriptionAndReviews />
                <RelatedProducts />
            </div>
        </Container>
    </section>
  </>;
};

export default ProductDetailsComponent;
