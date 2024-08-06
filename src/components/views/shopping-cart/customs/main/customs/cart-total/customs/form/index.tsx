import { useTranslation } from "react-i18next";
import { Form } from "antd";
import { FC, memo } from "react";

import { CheckOutlined } from "@ant-design/icons";

import Input from "@generic/input";
import Button from "@generic/button";
import useCartTotalFeatures from "../../features";

const ApplyCouponForm: FC = memo(() => {
  const { t } = useTranslation();
  const { couponHandler, form, coupon, loading } = useCartTotalFeatures();

  return (
    <Form onFinish={couponHandler} form={form}>
      <Form.Item
        name='coupon_code'
        rules={[
          {
            required: true,
            message: t("shopping_cart.apply_coupon_error"),
          },
        ]}
      >
        <div className='flex items-center mt-[35px]'>
          <Input
            type='text'
            placeholder={t("shopping_cart.apply_coupon")}
            className='w-full h-[35px] md:h-[40px] rounded-tr-none rounded-br-none'
          />
          <Button
            type='submit'
            variant='primary'
            className='rounded-tl-[0px] rounded-bl-[0px] ml-0 h-[35px] md:h-[40px]'
            loading={loading}
            disabled={!!coupon?.code}
          >
            {!loading && coupon?.code ? (
              <CheckOutlined />
            ) : (
              t("shopping_cart.apply")
            )}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
});

export default ApplyCouponForm;
