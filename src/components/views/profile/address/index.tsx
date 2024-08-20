
import { useTranslation } from "react-i18next";

import Typography from "@generic/typography";
import { AddressForm, ShippingAddress } from "./customs";

const AddressComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between gap-3 mb-[30px]'>
        <div>
          <Typography size='h4' className='font-medium mb-3'>
          {t('form.billing_address')}
          </Typography>
          <Typography size='p' className='font-light'>
            {t('form.billing_address_description')}
          </Typography>
        </div>
        <Typography size='h5' className='font-bold text-green cursor-pointer'>
          {t('form.add')}
        </Typography>
      </div>

      <AddressForm />
      <ShippingAddress />
    </div>
  );
};

export default AddressComponent;
