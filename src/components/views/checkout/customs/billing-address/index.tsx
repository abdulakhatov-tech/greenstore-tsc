import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { FC } from "react";

import useBillingAddressFeatures from "./features";
import { PaymentMethods } from "./customs";
import FormField from "@generic/form-field";
import { Button } from "@generic/index";

const BillingAddress: FC = () => {
  const { t } = useTranslation();
  const { onFinish, initialState, loading, form } = useBillingAddressFeatures();

  return (
    <div className="row-start-2 md:row-start-0">
      <h2 className='text-[17px] font-bold leading-4 text-black mb-[20px]'>
        {t("checkout.billing_address")}
      </h2>

      <Form
        layout={"vertical"}
        className='w-full'
        form={form}
        initialValues={initialState}
        onFinish={onFinish}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4'>
          <FormField
            labelKey='checkout.first_name'
            name='name'
            rules={[
              { required: true, message: t("checkout.first_name_error") },
            ]}
          />

          <FormField
            labelKey='checkout.last_name'
            name='surname'
            rules={[{ required: true, message: t("checkout.last_name_error") }]}
          />

          <FormField
            labelKey='checkout.country'
            name='country'
            rules={[{ required: true, message: t("checkout.country_error") }]}
          />

          <FormField
            labelKey='checkout.city'
            name='city'
            rules={[{ required: true, message: t("checkout.city_error") }]}
          />

          <FormField
            labelKey='checkout.street'
            name='street'
            rules={[{ required: true, message: t("checkout.street_error") }]}
          />

          <FormField
            labelKey='checkout.additional_address'
            name='additional_street'
            rules={[]}
          />

          <FormField
            labelKey='checkout.state'
            name='state'
            rules={[{ required: true, message: t("checkout.state_error") }]}
          />

          <FormField
            labelKey='checkout.postal_code'
            name='zip'
            rules={[
              { required: true, message: t("checkout.postal_code_error") },
            ]}
          />

          <FormField
            labelKey='checkout.email'
            name='email'
            type='email'
            rules={[{ required: true, message: t("checkout.email_error") }]}
          />

          <FormField
            labelKey='checkout.phone'
            name='phone_number'
            type='string'
            rules={[{ required: true, message: t("checkout.phone_error") }]}
          />

          <PaymentMethods />

          <Form.Item label={t("checkout.notes")} name='notes'>
            <Input.TextArea
              placeholder={t("checkout.notes")}
              autoSize={{
                minRows: 7,
                maxRows: 10,
              }}
              className="hover:border-green focus:outline-none focus:ring-2 focus:ring-[#46A358] focus:ring-opacity-50"
            />
          </Form.Item>
          <Form.Item>
            <Button
              variant='primary'
              type='submit'
              loading={loading}
              disabled={loading}
              className='w-full'
            >
              {t("checkout.place_order")}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default BillingAddress;
