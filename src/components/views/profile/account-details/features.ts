import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";

import { AccountDetailsUserI } from "@type/index";
import useAccountDetailsService from "@services/account-details";
import { useNotification } from "@tools/notification/notification";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { updateUser } from "@redux/slices/auth";

const useAccountDetailsFeatures = () => {
  const dispatch = useAppDispatch();
  const dispatchNotification = useNotification();
  const [form] = Form.useForm();
  
  const { user} = useAppSelector(({ auth }) => auth);
  const { postAccountDetails } = useAccountDetailsService();
  const [loading, setLoading] = useState(false);


  // Set form fields when user data changes
  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        ...user,
        profile_photo: user?.profile_photo || undefined,
      });
    }
  }, [user, form]);

  // Comparing form values with current user data
  const isFormModified = useCallback(
    (values: Omit<AccountDetailsUserI, "_id">) => {
      const currentUser = user || {};
      return Object.keys(values).some(
        (key) => (values as any)[key] !== (currentUser as any)[key]
      );
    },
    [user]
  );

  // Handler for form submission
  const onFinish = async (values: Omit<AccountDetailsUserI, "_id">) => {
    if (!isFormModified(values)) {
      // Notify user if no changes are detected
      dispatchNotification({
        type: "info",
        message: "No Changes Detected",
        description: "There are no changes to update.",
      });
      return;
    }

    const user_info: AccountDetailsUserI = {
      _id: user?._id || new Date().toISOString(),
      ...values,
      profile_photo:
        values?.profile_photo?.file?.response?.image_url?.url ??
        user?.profile_photo,
    };

    setLoading(true);
    await postAccountDetails(user_info);
    dispatch(updateUser({
      setter: {
        ...user,
        ...values,
        profile_photo:
          values?.profile_photo?.file?.response?.image_url?.url ??
          user?.profile_photo,
      },
    }))
    setLoading(false);
  };

  return { form, onFinish, loading, user };
};

export default useAccountDetailsFeatures;
