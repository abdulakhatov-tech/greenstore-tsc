import { useState } from "react";
import { useAppSelector } from "@hooks/useRedux";
import useWishlistFeatures from "./features";

const usePaginationFeatures = () => {
   const { plant_gallery_layout } = useAppSelector((state) => state?.layout)
   const { data: products } = useWishlistFeatures();

   // pagination
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = plant_gallery_layout === 'grid' ? 9 : 4;

   // Calculate the products to display based on the current page
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentProducts = products?.slice(startIndex, endIndex);

   // Handle page change
   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return { currentProducts, handlePageChange, currentPage, itemsPerPage };
};

export default usePaginationFeatures;
