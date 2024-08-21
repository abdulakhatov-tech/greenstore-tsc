import { Form } from "antd";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { LoadingOutlined } from "@ant-design/icons";

import Button from "@generic/button";
import useFormRules from "@utils/form";
import useAuthModalFeatures from "../../features";
import FormField from "@generic/form-field";

const AuthForm = () => {
  const { t } = useTranslation();
  const { authRegisterFormRules } = useFormRules();
  const { initialValues, onFinish, form, loading, authType } =
    useAuthModalFeatures();

  const isSignUp = authType === "sign-up";

  return (
    <Form
      onFinish={onFinish}
      initialValues={initialValues}
      form={form as undefined}
      className='flex flex-col gap-1'
      aria-labelledby='auth-form-title'
    >
      {isSignUp && (
        <FormField
          name='name'
          rules={authRegisterFormRules["name"]}
          placeholderKey='modal.auth.form.name'
        />
      )}

      {isSignUp && (
        <FormField
          name='surname'
          rules={authRegisterFormRules["surname"]}
          placeholderKey='modal.auth.form.surname'
        />
      )}
      <FormField
        name='email'
        type='email'
        rules={authRegisterFormRules["email"]}
        placeholderKey='modal.auth.form.email'
      />
      <FormField
        name='password'
        type='password'
        rules={authRegisterFormRules["password"]}
        placeholderKey='modal.auth.form.password'
      />
      {isSignUp && (
        <FormField
          name='confirmPassword'
          type='password'
          dependencies={["password"]}
          rules={authRegisterFormRules["confirmPassword"]}
          placeholderKey='modal.auth.form.confirm_password'
        />
      )}

      <Button variant='primary' type='submit' size='large' className='w-full'>
        {`${isSignUp ? t("modal.auth.sign_up") : t("modal.auth.sign_in")}`}{" "}
        {loading && <LoadingOutlined />}
      </Button>
    </Form>
  );
};

const MemoizedAuthForm = memo(AuthForm);

export default MemoizedAuthForm;
