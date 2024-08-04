import { FC } from "react";
import { Outlet, useOutlet } from "react-router-dom";

const ShopComponent: FC = () => {
  const hasOutlet = useOutlet();

  return <>{!hasOutlet ? <div>ShopComponent</div> : <Outlet />}</>;
};

export default ShopComponent;
