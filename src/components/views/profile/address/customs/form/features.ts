import { useCallback, useEffect, useState } from "react";
import { Form } from "antd";

import useAddressService from "@services/address";
import { AddressFormValuesI } from "@type/index";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { updateUser } from "@redux/slices/auth";

const useAddressFormFeatures = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { user } = useAppSelector(({ auth }) => auth);
  const { postAddress } = useAddressService();

  const [loading, setLoading] = useState<boolean>(false);

  // Setting form fields when user data changes
  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        ...user?.billing_address,
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone_number: user.phone_number,
      });
    }
  }, [user, form]);

  // Handler for form submission
  const onFinish = useCallback(
    async (values: AddressFormValuesI) => {
      if (!user) return;

      const userAddress = {
        _id: user?._id,
        ...values,
      };

      setLoading(true);
      await postAddress(userAddress);
      dispatch(updateUser({
        setter: {
          ...user,
          name: String(userAddress?.name),
          surname: String(userAddress?.surname),
          email: String(userAddress?.email),
          phone_number: String(userAddress?.phone_number),
          billing_address: {
            country: String(userAddress?.country),
            extra_address: String(userAddress?.extra_address),
            state: String(userAddress?.state),
            town: String(userAddress?.town),
            street_address: String(userAddress?.street_address),
            zip: String(userAddress?.zip),
          },
        },
      }));

      setLoading(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, postAddress, updateUser]
  );
  return { form, onFinish, loading };
};

export default useAddressFormFeatures;
