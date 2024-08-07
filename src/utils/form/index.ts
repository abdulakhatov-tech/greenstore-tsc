import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";
import { useTranslation } from "react-i18next";

const useFormRules = () => {
  const { t } = useTranslation();

  const authRegisterFormRules = {
    name: [{ required: true, message: t("modal.auth.form.name_error") }],
    surname: [{ required: true, message: t("modal.auth.form.surname_error") }],
    email: [{ required: true, message: t("modal.auth.form.email_error") }],
    password: [
      {
        required: true,
        message: "",
      },
      {
        validator: async (_: RuleObject, password: string) => {
          if (!password) {
            return Promise.reject(
              new Error(t("modal.auth.form.password_error"))
            );
          }

          // Validate length
          if (password.length <= 2) {
            return Promise.reject(
              new Error(t("modal.auth.form.password_error_2"))
            );
          }

          // // Validate characters, numbers, and symbols
          // const hasNumber = /\d/;
          // const hasCharacter = /[a-zA-Z]/;
          // const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;

          // if (!hasNumber.test(password)) {
          //    return Promise.reject(
          //       new Error(t("modal.auth.form.password_error_3")),
          //    );
          // }

          // if (!hasCharacter.test(password)) {
          //    return Promise.reject(
          //       new Error(t("modal.auth.form.password_error_4")),
          //    );
          // }

          // if (!hasSymbol.test(password)) {
          //    return Promise.reject(
          //       new Error(t("modal.auth.form.password_error_5")),
          //    );
          // }

          return Promise.resolve();
        },
      },
    ],
    confirmPassword: [
      {
        required: true,
        message: t("modal.auth.form.confirm_password_error"),
      },
      ({ getFieldValue }: StoreValue) => ({
        validator(_: RuleObject, value: string) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error(t("modal.auth.form.confirm_password_error_2"))
          );
        },
      }),
    ],
  };

  const authSignInFormRules = {
    email: [{ required: true, message: t("modal.auth.form.email_error") }],
    password: [
      { required: true, message: t("modal.auth.form.password_error") },
    ],
  };

  const accountDetailsFormRules = {
    name: [{ required: true, message: t("form.first_name_error") }],
    surname: [{ required: true, message: t("form.last_name_error") }],
    email: [{ required: true, message: t("form.email_error") }],
    phone_number: [{ required: true, message: t("form.phone_error") }],
    username: [{ required: true, message: t("form.username_error") }],
    profile_photo: [{ required: true, message: t("form.profile_photo_error") }],
  };

  return {
    authRegisterFormRules,
    authSignInFormRules,
    accountDetailsFormRules,
  };
};

export default useFormRules;
