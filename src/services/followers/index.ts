import useAxios from "@hooks/useAxios";
import { updateUser } from "@redux/slices/auth";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

const useFollowersService = () => {
  const dispatch = useAppDispatch();
  const axios = useAxios();
  const { user } = useAppSelector((state) => state.auth);

  const followUserMutation = useMutation({
    mutationFn: async (followerId: string) => {
      dispatch(
        updateUser({
          setter: {
            ...user,
            followers: [...(user?.followers ?? ""), followerId],
          },
        })
      );

      await axios({
        url: "/user/follow",
        method: "POST",
        data: {
          _id: followerId,
        },
      });
    },
  });

  const unfollowUserMutation = useMutation({
    mutationFn: async (followerId: string) => {
      dispatch(
        updateUser({
          setter: {
            ...user,
            followers:
              user?.followers?.filter(
                (follower_id: string) => follower_id !== followerId
              ) ?? user?.followers,
          },
        })
      );

      await axios({
        url: "/user/unfollow",
        method: "POST",
        data: {
          _id: followerId,
        },
      });
    },
  });

  return {
    followUserMutation: followUserMutation.mutate,
    unfollowUserMutation: unfollowUserMutation.mutate,
  };
};

export default useFollowersService;
