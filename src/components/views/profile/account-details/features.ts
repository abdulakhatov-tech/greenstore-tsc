import { Form } from "antd";
import { useEffect, useState } from "react";
import { useAuth } from "@config/auth";
import useAccountDetailsService from "@services/account-details";
import { AccountDetailsUserI } from "@type/index";

const useAccountDetailsFeatures = () => {
  const [form] = Form.useForm();
  const { getUser } = useAuth();
  const { postAccountDetails } = useAccountDetailsService();
  const [loading, setLoading] = useState(false);

  const user = getUser().user;

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const onFinish = async (values: Omit<AccountDetailsUserI, "_id">) => {
    const user_info: AccountDetailsUserI = {
      _id: user?._id || String(new Date().getTime()),
      ...values,
    };

    try {
      setLoading(true);
      await postAccountDetails(user_info);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return { form, onFinish, loading, user };
};

export default useAccountDetailsFeatures;
