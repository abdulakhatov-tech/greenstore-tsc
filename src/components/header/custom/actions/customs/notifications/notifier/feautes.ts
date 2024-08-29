import useAxios from "@hooks/useAxios";
import { useNavigate } from "react-router-dom";

import useQueryHandler from "@hooks/useQueryHandler";

const useNotifierFeatures = (user_id: string) => {
  const axios = useAxios();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: user,
  } = useQueryHandler({
    queryKey: [`user-${user_id}`],
    queryFn: async () => {
      const { data } = await axios({
        url: `/user/by_id/${user_id}`,
      });
      return data?.data || null;
    },
  });

  const goToUserProfileHandler = () => {
    if (!loading) {
      navigate(`/user/${user_id}`);
    }
  };

  const loading = isLoading || isError;

  return { loading, user, goToUserProfileHandler };
};

export default useNotifierFeatures;
