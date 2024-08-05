import { FC, useEffect } from "react";

import { Header, Main, ProductDescriptionAndReviews } from "./customs";
import Container from "@layout/container";
import { useAppDispatch } from "@hooks/useRedux";
import { setRelatedProducts } from "@redux/slices/related-products";
import RelatedProducts from "@components/releted-products";
import { useParams } from "react-router-dom";

const ProductDetailsComponent: FC = () => {
  const { category } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setRelatedProducts(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <>
      <section>
        <Container>
          <div className='py-8 flex flex-col gap-8'>
            <Header />
            <Main />
            <ProductDescriptionAndReviews />
            <RelatedProducts />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailsComponent;
