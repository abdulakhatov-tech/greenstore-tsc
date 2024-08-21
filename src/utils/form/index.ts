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

          // Validating length
          if (password.length <= 2) {
            return Promise.reject(
              new Error(t("modal.auth.form.password_error_2"))
            );
          }

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

  const plantFormRules = {
    title: [{ required: true, message: t('modal.plant_form_modal.title_error')}],
    category: [{ required: true, message: t('modal.plant_form_modal.category_error')}],
    price: [{ required: true, message: t('modal.plant_form_modal.price_error')}],
    discount_price: [{ required: true, message: t('modal.plant_form_modal.discount_price_error')}],
    short_description: [{ required: true, message: t('modal.plant_form_modal.short_description_error')}],
    description: [{ required: true, message: t('modal.plant_form_modal.description_error')}],
    image: [{ required: true, message: t('modal.plant_form_modal.image_error')}],
  }

  return {
    authRegisterFormRules,
    authSignInFormRules,
    accountDetailsFormRules,
    plantFormRules
  };
};

export default useFormRules;
