import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { LoadingOutlined } from "@ant-design/icons";
import { memo } from "react";

import Button from "@generic/button";
import useFormRules from "@utils/form";
import useAuthModalFeatures from "../../features";
import FormField from "@generic/form-field";

const AuthForm = () => {
   const { t } = useTranslation();
   const { authRegisterFormRules } = useFormRules();
   const { initialValues, onFinish, form, loading, authType } = useAuthModalFeatures();

   const isSignUp = authType === "sign-up";

   return (
      <Form
         onFinish={onFinish}
         initialValues={initialValues}
         form={form as undefined}
         className="flex flex-col gap-1"
         aria-labelledby="auth-form-title"
      >
         {isSignUp && (
            // <Form.Item name="name" rules={authRegisterFormRules["name"]}>
            //    <Input
            //       type="text"
            //       placeholder={t("modal.auth.form.name")}
            //       aria-label={t("modal.auth.form.name")}
            //    />
            // </Form.Item>
            <FormField
            name='name'
            rules={authRegisterFormRules["name"]}
            placeholderKey="modal.auth.form.name"
          />
         )}

         {isSignUp && (
            // <Form.Item name="surname" rules={authRegisterFormRules["surname"]}>
            //    <Input
            //       type="text"
            //       placeholder={t("modal.auth.form.surname")}
            //       aria-label={t("modal.auth.form.surname")}
            //    />
            // </Form.Item>
            <FormField
            name='surname'
            rules={authRegisterFormRules["surname"]}
            placeholderKey="modal.auth.form.surname"
          />
         )}
         {/* <Form.Item name="email" rules={authRegisterFormRules["email"]}>
            <Input
               type="email"
               placeholder={t("modal.auth.form.email")}
               aria-label={t("modal.auth.form.email")}
            />
         </Form.Item> */}
         <FormField
            name='email'
            type='email'
            rules={authRegisterFormRules["email"]}
            placeholderKey="modal.auth.form.email"
          />
         {/* <Form.Item name="password" rules={authRegisterFormRules["password"]}>
            <Input.Password
               type="text"
               placeholder={t("modal.auth.form.password")}
               aria-label={t("modal.auth.form.password")}
            />
         </Form.Item> */}
         <FormField
            name='password'
            type='password'
            rules={authRegisterFormRules["password"]}
            placeholderKey="modal.auth.form.password"
          />
         {isSignUp && (
            // <Form.Item
            //    name="confirmPassword"
            //    dependencies={["password"]}
            //    rules={authRegisterFormRules["confirmPassword"]}
            // >
            //    <Input.Password
            //       type="text"
            //       placeholder={t("modal.auth.form.confirm_password")}
            //       aria-label={t("modal.auth.form.confirm_password")}
            //    />
            // </Form.Item>
            <FormField
            name='confirmPassword'
            type='password'
            dependencies={["password"]}
            rules={authRegisterFormRules["confirmPassword"]}
            placeholderKey="modal.auth.form.confirm_password"
          />
         )}

         <Button variant="primary" type="submit" size="large" className="w-full">
            {`${
               isSignUp
                  ? t("modal.auth.sign_up")
                  : t("modal.auth.sign_in")
            }`}{" "}
            {loading && <LoadingOutlined />}
         </Button>
      </Form>
   );
};

const MemoizedAuthForm = memo(AuthForm);

export default MemoizedAuthForm;
