import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";

const useTrackOrderService = () => {
    const axios = useAxios();

    const orders = useQueryHandler({
        queryKey: ['track-order'],
        queryFn: async () => {
            const response = await axios({
                url: '/order/get-order'
            })

            return response.data.data || []
        }
    })

  return { orders }
};

export default useTrackOrderService;
