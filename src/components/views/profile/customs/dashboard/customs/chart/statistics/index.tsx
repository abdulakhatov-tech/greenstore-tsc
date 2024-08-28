import React from "react";
import { Card, Statistic } from "antd";

import { useAppSelector } from "@hooks/useRedux";
import useMyProductsService from "@services/my-products";
import useTrackOrderService from "@services/track-order";

const Statistics: React.FC = () => {
  const { user } = useAppSelector(({ auth }) => auth);
  const { myProducts } = useMyProductsService();
  const { orders } = useTrackOrderService();

  return (
    <div className='mb-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
        <Card>
          <Statistic
            title='Wishlist'
            value={user && user?.wishlist?.length}
            valueStyle={{
              color: "#3f8600",
              fontWeight: "bold",
            }}
          />
        </Card>

        <Card>
          <Statistic
            title='Orders'
            value={orders?.data && orders?.data?.length}
            valueStyle={{
              color: "#3f8600",
              fontWeight: "bold",
            }}
          />
        </Card>

        <Card>
          <Statistic
            title='Followers'
            value={user && user?.followers?.length}
            valueStyle={{
              color: "#3f8600",
              fontWeight: "bold",
            }}
          />
        </Card>

        <Card>
          <Statistic
            title='Products'
            value={myProducts?.data && myProducts?.data?.length}
            valueStyle={{
              color: "#3f8600",
              fontWeight: "bold",
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default Statistics;
