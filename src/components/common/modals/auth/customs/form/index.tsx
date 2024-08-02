import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { LoadingOutlined } from "@ant-design/icons";
import { memo } from "react";

import Button from "@generic/button";
import useFormRules from "@utils/form";
import useAuthModalFeatures from "../../features";

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
            <Form.Item name="name" rules={authRegisterFormRules["name"]}>
               <Input
                  type="text"
                  placeholder={t("modal.auth.form.name")}
                  aria-label={t("modal.auth.form.name")}
               />
            </Form.Item>
         )}

         {isSignUp && (
            <Form.Item name="surname" rules={authRegisterFormRules["surname"]}>
               <Input
                  type="text"
                  placeholder={t("modal.auth.form.surname")}
                  aria-label={t("modal.auth.form.surname")}
               />
            </Form.Item>
         )}
         <Form.Item name="email" rules={authRegisterFormRules["email"]}>
            <Input
               type="email"
               placeholder={t("modal.auth.form.email")}
               aria-label={t("modal.auth.form.email")}
            />
         </Form.Item>
         <Form.Item name="password" rules={authRegisterFormRules["password"]}>
            <Input.Password
               type="text"
               placeholder={t("modal.auth.form.password")}
               aria-label={t("modal.auth.form.password")}
            />
         </Form.Item>
         {isSignUp && (
            <Form.Item
               name="confirmPassword"
               dependencies={["password"]}
               rules={authRegisterFormRules["confirmPassword"]}
            >
               <Input.Password
                  type="text"
                  placeholder={t("modal.auth.form.confirm_password")}
                  aria-label={t("modal.auth.form.confirm_password")}
               />
            </Form.Item>
         )}

         <Button variant="primary" type="submit" className="w-full">
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
