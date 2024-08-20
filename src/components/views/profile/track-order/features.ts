import useTrackOrderService from "@services/track-order";

const useTrackOrderFeatures = () => {
  const { orders } = useTrackOrderService();

  return { ...orders };
};

export default useTrackOrderFeatures;
