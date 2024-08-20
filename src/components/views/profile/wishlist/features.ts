import useWishlistService from "@services/wishlist";

const useWishlistFeatures = () => {
    const { wishlist } = useWishlistService();

  return {
    ...wishlist
  }
};

export default useWishlistFeatures;
