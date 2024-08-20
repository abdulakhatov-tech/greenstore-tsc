import { useMutation } from "@tanstack/react-query";

import useAxios from "@hooks/useAxios";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";

// Define type for address data
interface AddressDataI {
  _id?: string;
  country: string;
  extra_address: string;
  state: string;
  town: string;
  street_address: string;
  zip: string;
  name?: string;
  surname?: string;
  email?: string;
  phone_number?: string;
}

const useAddressService = () => {
  const axios = useAxios();
  const dispatch = useAppDispatch();

  const { mutateAsync: postAddress } = useMutation({
    mutationFn: async (address: AddressDataI) => {
      const response = await axios({
        method: "POST",
        url: "/user/address",
        data: address,
      });

      return response?.data;
    },
    onSuccess: () => {
      dispatch(
        setNotification({
          type: "success",
          message: "Address",
          description: "Address updated successfully",
        })
      );
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "An unexpected error occurred.";

      dispatch(
        setNotification({
          type: "error",
          message: "Failed to update address",
          description: errorMessage,
        })
      );
    },
  });

  return { postAddress };
};

export default useAddressService;
