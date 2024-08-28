import { Modal } from "antd";
import { useParams } from "react-router-dom";

import useNotificationService from "@services/notification";
import useSearchParamsHook from "@hooks/useSearchParams";
import useFollowersService from "@services/followers";
import { useAppSelector } from "@hooks/useRedux";
import { AuthQuery } from "@type/index";

const useHeaderFeatures = () => {
  const { setParam } = useSearchParamsHook();
  const { sendInvitation } = useNotificationService();
  const { authorId } = useParams<{ authorId: string }>();
  const { isAuthed } = useAppSelector((state) => state.auth);
  const { followUserMutation, unfollowUserMutation } = useFollowersService();

  const requireAuth = (action: () => void) => {
    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);
    } else {
      action();
    }
  };

  const startChatHandler = () => {
    requireAuth(() => {
      Modal.info({
        title: "Messaging coming soon...",
        okButtonProps: {
          type: "dashed",
        },
      });
    });
  };

  const followHandler = () => {
    requireAuth(() => {
      if (authorId) {
        followUserMutation(authorId);
      }
    });
  };

  const unfollowHandler = () => {
    requireAuth(() => {
      if (authorId) {
        unfollowUserMutation(authorId);
      }
    });
  };

  const sendInvitationHandler = () => {
    requireAuth(() => {
      if (authorId) {
        sendInvitation(authorId);
      }
    });
  };

  return {
    startChatHandler,
    followHandler,
    unfollowHandler,
    sendInvitationHandler,
  };
};

export default useHeaderFeatures;
