
import { FC } from 'react';

import { Image } from '@generic/index';
import trackOrder from '@assets/images/track-order.png'
import { useTranslation } from 'react-i18next';

const Header:FC = () => {
    const { t } = useTranslation();

  return <div className="w-full h-[156px] flex flex-col items-center justify-center bg-[rgba(70,163,89,0.06)]">
    <Image src={trackOrder} alt='track-order' />
    <p className='text-[16px] font-normal leading-4 text-gray mt-4'>{t('modal.track_order.your_order_has_been_received')}</p>
  </div>;
};

export default Header;
