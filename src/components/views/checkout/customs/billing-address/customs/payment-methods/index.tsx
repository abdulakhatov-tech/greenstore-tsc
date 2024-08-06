// components/PaymentMethodsSection.tsx

import { Form, Radio } from "antd";
import { useTranslation } from "react-i18next";
import { FC } from "react";

import { PAYMENT_METHODS } from "@type/index";
import { Image } from "@generic/index";

const PaymentMethods: FC = () => {
  const { t } = useTranslation();

  const radioStyle: string = "hover:text-green w-full h-[45px] px-[14px] py-[18px] border-[1px] border-[#EAEAEA] flex items-center gap-[10px] rounded-[3px] hover:outline-none hover:ring-2 hover:ring-[#46A358] hover:ring-opacity-50"

  return (
    <Form.Item
      name="method"
      label={t("checkout.payment_method")}
      rules={[
        {
          required: true,
          message: t("checkout.payment_method_error"),
        },
      ]}
    >
      <Radio.Group className="w-full flex flex-col gap-[15px]" id="payment_methods">
        <Radio
          value={PAYMENT_METHODS.PAY_BY_CARD ?? "pay-by-card"}
          className={radioStyle}
        >
          <div className="flex items-center gap-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
              alt="paypal"
              className="h-[24px] w-[24px]"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a"
              alt="master-card"
              className="h-[28px] w-[28px]"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2"
              alt="visa-card"
              className="h-[28px] w-[28px]"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=89c19c4a-9c33-4e7a-b802-a7f0ba10ef04"
              alt="american-express"
              className="h-[28px] w-[28px]"
            />
          </div>
        </Radio>
        <Radio
          value={PAYMENT_METHODS.DIRECT_BANK_TRANSFER ?? "direct-bank-transfer"}
          className={radioStyle}
        >
          <span className="text-[15px] font-normal leading-4">
            {t("checkout.direct_bank_transfer")}
          </span>
        </Radio>
        <Radio
          value={PAYMENT_METHODS.CASH_ON_DELIVERY ?? "cash-on-delivery"}
          className={radioStyle}
        >
          <span className="text-[15px] font-normal leading-4">
            {t("checkout.cash_on_delivery")}
          </span>
        </Radio>
      </Radio.Group>
    </Form.Item>
  );
};

export default PaymentMethods;
