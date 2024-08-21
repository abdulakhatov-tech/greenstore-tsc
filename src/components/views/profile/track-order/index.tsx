import { Empty, Pagination } from "antd";
import { useTranslation } from "react-i18next";

import { Order } from "./customs";
import Typography from "@generic/typography";
import useTrackOrderFeatures from "./features";
import OrderSkeleton from "@tools/order-skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";
import usePaginationFeatures from "./pagination";

const TrackOrderComponent = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { data: orders, isLoading, isError } = useTrackOrderFeatures();
  const { currentProducts, handlePageChange, currentPage, itemsPerPage } =
    usePaginationFeatures();

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
          : !orders?.length ? <Empty
          className='mt-[10px]'
          description={
            <div>
              <Typography size='h4' className='font-semibold'>
                No orders yet...
              </Typography>
            </div>
          }
        /> : currentProducts?.map((order: any, index: any) => {
              return <Order key={order?._id ?? index} order={order} />;
            })}
      </div>
      <div className='flex justify-end mt-[50px]'>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          total={orders?.length ?? 0}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TrackOrderComponent;
