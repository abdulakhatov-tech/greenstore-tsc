import { useTranslation } from "react-i18next";
import { FC } from "react";

import Button from "@generic/button";
import useActionsFeatures from "./features";

const Actions: FC = () => {
  const { t } = useTranslation();
  const { handleCheckout, handleContinueShopping } = useActionsFeatures();

  return (
    <div className='mt-[30px] flex flex-col gap-2'>
      <Button
        type='button'
        variant='primary'
        className='w-full'
        onClick={handleCheckout}
      >
        {t("shopping_cart.proceed_to_checkout")}
      </Button>
      <Button
        type='button'
        variant='secondary'
        className='w-full'
        onClick={handleContinueShopping}
      >
        {t("shopping_cart.continue_shopping")}
      </Button>
    </div>
  );
};

export default Actions;
