import { useTranslation } from "react-i18next";

import { Order } from "./customs";
import Typography from "@generic/typography";
import useTrackOrderFeatures from "./features";
import OrderSkeleton from "@tools/order-skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";

const TrackOrderComponent = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { data, isLoading, isError } = useTrackOrderFeatures();

  return (
    <div>
      <Typography size='h4' className='font-bold mb-5'>
        { t('profile.track_order.title') }
      </Typography>
      <div className='flex flex-col gap-2'>
        {isLoading || isError || !isOnline
          ? Array.from({ length: 7 }).map((_, index) => (
              <OrderSkeleton key={index} />
            ))
          : data?.map((order: any, index: any) => {
              return <Order key={order?._id ?? index} {...order} />;
            })}
      </div>
    </div>
  );
};

export default TrackOrderComponent;
