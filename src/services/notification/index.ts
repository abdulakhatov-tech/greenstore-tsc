import { useMutation } from "@tanstack/react-query";

import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useNotification } from "@tools/notification/notification";
import { useAppSelector } from "@hooks/useRedux";

const useNotificationService = () => {
  const axios = useAxios();
  const { isAuthed } = useAppSelector(({auth}) => auth)
  const dispatchNotification = useNotification();

  const getAllNotifications = useQueryHandler({
    queryKey: ["notifications"],
    queryFn: async () => {
      if (!isAuthed) {
        return [];
      }

      const response = await axios({
        url: "/user/notification",
      });

      return response?.data?.data || [];
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: "Failed to retrieve notifications",
        description: "Failed to retrieve notifications. Please try again later",
      });
    },
  });

  const sendInvitation = useMutation({
    mutationFn: async (authorId: string) => {
      const response = await axios({
        url: "/user/notification/invite",
        method: "POST",
        data: {
          _id: authorId,
        },
      });

      return response.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: "Invitation sent successfully",
        description: "Your invitation was sent successfully",
      });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: "Failed to send invitation",
        description: "Failed to send invitation. Please try again later",
      });
    },
  });

  return { getAllNotifications, sendInvitation: sendInvitation.mutate };
};

export default useNotificationService;
