import { useState } from "react";
import useTrackOrderFeatures from "./features";

const usePaginationFeatures = () => {
   const { data: orders } = useTrackOrderFeatures();

   // pagination
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;

   // Calculate the products to display based on the current page
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentProducts = orders?.slice(startIndex, endIndex);

   // Handle page change
   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return { currentProducts, handlePageChange, currentPage, itemsPerPage };
};

export default usePaginationFeatures;
