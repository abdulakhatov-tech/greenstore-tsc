import { Table } from "antd";
import { useTranslation } from "react-i18next";

import Button from "@generic/button";
import useTableColumns from "./columns";
import useMyProductsFeatures from "./features";

const MyProductsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { columns } = useTableColumns();
  const { isLoading, data } = useMyProductsFeatures();

  return (
    <div className='overflow-hidden'>
      <div className='flex items-center justify-between gap-5  mb-5'>
        <h3 className='text-[15px] font-bold leading-4 text-black'>
          {t("profile.my_products")}
        </h3>
        <Button type='button' variant='secondary'>
          {t("profile.add_new")}
        </Button>
      </div>

      <div className='w-full overflow-x-auto'>
        <div className='min-w-[550px]'>
          <Table loading={isLoading} columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default MyProductsComponent;
