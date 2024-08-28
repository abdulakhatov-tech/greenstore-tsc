import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useParams } from "react-router-dom";

const useUsersService = () => {
  const axios = useAxios();
  const { authorId } = useParams();

  const getUserById = useQueryHandler({
    queryKey: ["user", authorId],
    queryFn: async () => {
      const { data } = await axios({
        url: `/user/by_id/${authorId}`,
      });

      return data?.data || null;
    },
  });

  return { getUserById };
};

export default useUsersService;
