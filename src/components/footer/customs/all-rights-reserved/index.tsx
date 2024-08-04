import { FC } from "react";
import { useTranslation } from "react-i18next";

const AllRightsReserved: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full flex items-center justify-center border-t-[1px] border-t-[rgba(70,163,89,0.45)] text-center py-4'>
      <span className='text-gray text-base'>
        © {new Date().getFullYear()} {t("footer_navigation.footer_text")}
      </span>
    </div>
  );
};
export default AllRightsReserved;
