import { useTranslation } from "react-i18next";
import {
  GoogleOutlined,
  FacebookOutlined,
  ScanOutlined,
} from "@ant-design/icons";

import { FC, memo } from "react";

import Button from "@generic/button";
import useAuthWithFeatures from "./features";

const AuthWith: FC = () => {
  const { t } = useTranslation();
  const { authWithGoogle, authWithQRCode, authWithFacebook } =
    useAuthWithFeatures();

  return (
    <div className='flex flex-col gap-2'>
      <Button
        type='button'
        variant='secondary'
        className='w-full border-[1px] border-gray text-gray capitalize hover:border-green hover:!text-green'
        aria-label={t("modal.auth.continue_with_google")}
        onClick={authWithGoogle}
      >
        <GoogleOutlined className='text-[18px] md:text-[22px]' />
        <span className='text-[13px] md:text-[14px] font-semibold leading-4'>
          {t("modal.auth.continue_with_google")}
        </span>
      </Button>
      <Button
        type='button'
        variant='secondary'
        className='w-full border-[1px] border-gray text-gray capitalize hover:border-green hover:!text-green'
        aria-label={t("modal.auth.continue_with_facebook")}
        onClick={authWithFacebook}
      >
        <FacebookOutlined className='text-[18px] md:text-[22px]' />
        <span className='text-[13px] md:text-[14px] font-semibold leading-4'>
          {t("modal.auth.continue_with_facebook")}
        </span>
      </Button>
      <Button
        type='button'
        variant='secondary'
        className='w-full border-[1px] border-gray text-gray capitalize hover:border-green hover:!text-green'
        aria-label={t("modal.auth.continue_with_qrcode")}
        onClick={authWithQRCode}
      >
        <ScanOutlined className='text-[18px] md:text-[22px]' />
        <span className='text-[13px] md:text-[14px] font-semibold leading-4'>
          {t("modal.auth.continue_with_qrcode")}
        </span>
      </Button>
    </div>
  );
};

const MemoizedAuthWith = memo(AuthWith);

export default MemoizedAuthWith;
