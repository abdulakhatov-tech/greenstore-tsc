import { Table } from "antd";
import { useTranslation } from "react-i18next";

import Button from "@generic/button";
import useTableColumns from "./columns";
import useMyProductsFeatures from "./features";
import Typography from "@generic/typography";

const MyProductsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { columns } = useTableColumns();
  const { isLoading, data, addProductHandler } = useMyProductsFeatures();

  return (
    <div className='overflow-hidden w-full'>
      <div className='flex items-center justify-between flex-wrap gap-5 mb-5'>
        <Typography size='h4' className='font-medium'>
          {t("profile.my_products")}
        </Typography>
        <Button type='button' variant='secondary' onClick={addProductHandler} disabled={isLoading}>
          {t("profile.add_new")}
        </Button>
      </div>

      <div className='w-full overflow-x-auto'>
        <div className='min-w-[750px]'>
          <Table loading={isLoading} columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default MyProductsComponent;
