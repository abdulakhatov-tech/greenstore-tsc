import { formatPrice, formatDate } from "@helpers/index";
import { useAppDispatch } from "@hooks/useRedux";
import { toggleOrderDetailsModalVisibility } from "@redux/slices/modal";
import Tooltip from "@tools/tooltip";
import { useTranslation } from "react-i18next";

const Order = ({ order }: any) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { _id, created_at, extra_shop_info } = order;

  const total = extra_shop_info?.total_price ?? 0;
  const hasCoupon = extra_shop_info?.coupon?.has_coupon ?? false;
  const discount_for = extra_shop_info?.coupon?.discount_for ?? 0;

  return (
    <div className='bg-[#FBFBFB] w-full flex p-3'>
      <div className='grid grid-cols-2 md:grid-cols-[1.7fr_1fr_1fr_1fr] w-full gap-2'>
        <div className='border-r p-2  border-[#46A35833]'>
          <h4 className='font-light mb-2'>
            {t("profile.track_order.order_number")}
          </h4>
          <Tooltip title={_id}>
            <p className='truncate-single-line'>{_id}</p>
          </Tooltip>
        </div>
        <div className='md:border-r p-2  md:border-[#46A35833]'>
          <h4 className='font-light mb-2'>{t("profile.track_order.date")}</h4>
          <p>{formatDate(created_at)}</p>
        </div>
        <div className='border-r p-2  border-[#46A35833]'>
          <h4 className='font-light mb-2'>{t("profile.track_order.total")}</h4>
          <p>
            {hasCoupon ? (
              <div>
                <p className='font-semibold line-through'>
                  {formatPrice(total)}
                </p>
                <p className='font-semibold'>
                  {formatPrice(
                    Number(total - Number(total * Number(`0.${discount_for}`)))
                  ) ?? 0}
                </p>
              </div>
            ) : (
              <p className='font-semibold'>{formatPrice(total)}</p>
            )}
          </p>
        </div>
        <div className='p-2 '>
          <h4 className='font-light mb-2'>{t("profile.track_order.more")}</h4>
          <Tooltip title={t("profile.track_order.detailed_info")}>
            <h4 className='text-green cursor-pointer' onClick={() => dispatch(toggleOrderDetailsModalVisibility({open: true, order }))}>
              {t("profile.track_order.get_details")}
            </h4>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Order;
