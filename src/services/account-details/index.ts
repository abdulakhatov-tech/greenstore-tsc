import useAxios from "@hooks/useAxios";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";
import { useMutation } from "@tanstack/react-query";
import { AccountDetailsUserI } from "@type/index";

const useAccountDetailsService = () => {
  const dispatch = useAppDispatch();
  const axios = useAxios();

  const postAccountDetails = useMutation({
    mutationFn: async (user: AccountDetailsUserI) => {
      const response = await axios({
        method: "POST",
        url: "/user/account-details",
        data: user,
      });

      return response?.data;
    },
    onSuccess: () => {
      dispatch(
        setNotification({
          type: "success",
          message: "Account details updated successfully",
        })
      );
    },
    onError: (error) => {
      dispatch(
        setNotification({
          type: "error",
          message: "Failed to update account details",
          description: error.message,
        })
      );
    },
  });

  return { postAccountDetails: postAccountDetails.mutateAsync };
};

export default useAccountDetailsService;
