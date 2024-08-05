import { useTranslation } from "react-i18next";
import { FC } from "react";

import { Header, Main } from "./customs";
import RelatedProducts from "@components/releted-products";

const ShoppingCartComponent: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Main />
      <RelatedProducts title={t("shopping_cart.you_maybe_interested_in")} />
    </>
  );
};

export default ShoppingCartComponent;
