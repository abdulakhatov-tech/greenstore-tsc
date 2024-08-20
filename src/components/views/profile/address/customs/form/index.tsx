import { Form } from "antd";
import { useTranslation } from "react-i18next";

import useAddressFormFeatures from "./features";
import FormField from "@generic/form-field";
import Button from "@generic/button";

const AddressForm: React.FC = () => {
  const { t } = useTranslation();
  const { form, onFinish, loading } = useAddressFormFeatures();

  return (
    <Form layout={"vertical"} form={form} onFinish={onFinish}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4'>
        <FormField
          labelKey='form.first_name'
          name='name'
          rules={[{ required: true, message: t("form.first_name_error") }]}
        />

        <FormField
          labelKey='form.last_name'
          name='surname'
          rules={[{ required: true, message: t("form.last_name_error") }]}
        />

        <FormField
          labelKey='form.country'
          name='country'
          rules={[{ required: true, message: t("form.country_error") }]}
        />

        <FormField
          labelKey='form.city'
          name='town'
          rules={[{ required: true, message: t("form.city_error") }]}
        />

        <FormField
          labelKey='form.street'
          name='street_address'
          rules={[{ required: true, message: t("form.street_error") }]}
        />

        <FormField
          labelKey='form.additional_address'
          name='extra_address'
          rules={[]}
        />

        <FormField
          labelKey='form.state'
          name='state'
          rules={[{ required: true, message: t("form.state_error") }]}
        />

        <FormField
          labelKey='form.postal_code'
          name='zip'
          rules={[{ required: true, message: t("form.postal_code_error") }]}
        />

        <FormField
          labelKey='form.email'
          name='email'
          type='email'
          rules={[{ required: true, message: t("form.email_error") }]}
          disabled={true}
        />

        <FormField
          labelKey='form.phone'
          name='phone_number'
          type='string'
          rules={[{ required: true, message: t("form.phone_error") }]}
        />

        <Form.Item>
          <Button
            variant='primary'
            type='submit'
            loading={loading}
            disabled={loading}
            className=''
          >
            {t("form.save")}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default AddressForm;
