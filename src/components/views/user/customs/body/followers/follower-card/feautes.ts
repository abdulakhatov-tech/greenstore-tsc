import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

import useAxios from "@hooks/useAxios";
import { AuthQuery } from "@type/index";
import { useAppSelector } from "@hooks/useRedux";
import useQueryHandler from "@hooks/useQueryHandler";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useSearchParamsHook from "@hooks/useSearchParams";

const useFollowerCardFeatures = (follower: string) => {
  const axios = useAxios();
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { setParam } = useSearchParamsHook();
  const { isAuthed } = useAppSelector((state) => state.auth);

  const {
    data: user,
    isError,
    isLoading,
  } = useQueryHandler({
    queryKey: [`/user-${follower}`],
    queryFn: async () => {
      const response = await axios({
        url: `/user/by_id/${follower}`,
      });

      return response?.data?.data;
    },
  });

  const loading = isLoading || isError || isOnline;

  const observeHandler = () => {
    if (!loading) {
      return;
    }

    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);
      return;
    }

    navigate(`/user/${user?._id}`);
  };

  const chatHandler = () => {
    if (!loading) {
      return;
    }

    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);
      return;
    }

    Modal.info({
      title: "Messaging comming soon...",
      okButtonProps: {
        type: "dashed",
      },
    });
  };
  return { loading, observeHandler, chatHandler, user };
};

export default useFollowerCardFeatures;
