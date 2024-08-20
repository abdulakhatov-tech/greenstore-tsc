import Typography from "@generic/typography";
import { Checkbox } from "antd";
import { useTranslation } from "react-i18next";

const ShippingAddress = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col md:flex-row justify-between md:items-center gap-5 mt-10'>
      <div>
        <Typography size='h4' className='font-medium mb-[10px]'>
          {t('form.billing_address')}
        </Typography>
        <Typography size='p' className='font-light'>
          {t('form.billing_address_description')}
        </Typography>
      </div>
      <div className='flex flex-row md:flex-col items-center md:items-start justify-between'>
        <Checkbox className='mb-[10px]'>{t('form.same_as_billing_address')}</Checkbox>
        <Typography size='h5' className='font-bold text-green cursor-pointer'>
          {t('form.add')}
        </Typography>
      </div>
    </div>
  );
};

export default ShippingAddress;
