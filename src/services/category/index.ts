import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";

const useCategoryService = () => {
  const axios = useAxios();

  const categories = useQueryHandler({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: "/flower/category",
      });
      return data?.data || [];
    },
  });

  return { ...categories };
};

export default useCategoryService;
