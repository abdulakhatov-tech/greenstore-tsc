import useProductFeatures from "../../../../features";
import { ProductDetails, SkeletonLoader } from "./customs";

const Content = () => {
  const { product } = useProductFeatures()

   return <>{!product?.isLoading ? <ProductDetails /> : <SkeletonLoader  />}</>;
};

export default Content;
