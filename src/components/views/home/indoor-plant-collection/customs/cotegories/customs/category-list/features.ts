import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { CategoryPropsI } from "@type/index";

const useCategoryListFeatures = () => {
  const axios = useAxios();

  const queryRequest = useQueryHandler({
    queryKey: ["categories"],
    queryFn: async () => {
      const response  = await axios({ url: "/flower/category" });

      return (response.data.data as CategoryPropsI[] ) || [];
    },
  }); 

  return queryRequest;
};

export default useCategoryListFeatures;
