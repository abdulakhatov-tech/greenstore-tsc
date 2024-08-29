import { Image, Popconfirm } from "antd";
import { useTranslation } from "react-i18next";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import useMyProductsFeatures from "./features";
import { ProductPropsI } from "@type/index";
import { formatDate, formatPrice } from "@helpers/index";
import Tooltip from "@tools/tooltip";

const useTableColumns = () => {
  const { t } = useTranslation();
  const { removeProductHander, editProductHandler } = useMyProductsFeatures();

  const columns = [
    {
      title: t("profile.products"),
      dataIndex: "title",
      key: "title",
      render: (_: any, record: ProductPropsI) => (
        <div className='flex items-start md:items-center flex-col md:flex-row gap-[14px]'>
          <Image
            src={record?.main_image}
            alt={record.title}
            style={{
              width: "80px",
              minWidth: "80px",
              height: "80px",
              objectFit: "cover",
            }}
          />
          <div className='flex flex-col gap-[6px] truncate-single-line'>
            <Tooltip title={record.title}>
              <h4 className='font-semibold overflow-hidden whitespace-nowrap truncate max-w-[250px] sm:max-w-[300px]'>
                {record?.title}
              </h4>
            </Tooltip>
            <Tooltip title={record._id}>
              <span className='overflow-hidden whitespace-nowrap truncate max-w-[250px] sm:max-w-fit'>
                SKU: {record._id}
              </span>
            </Tooltip>
          </div>
        </div>
      ),
    },
    {
      title: t("profile.created_at"),
      dataIndex: "created_at",
      key: "created_at",
      width: 130,
      render: (created_at: string) => formatDate(created_at),
    },
    {
      title: t("profile.price"),
      dataIndex: "price",
      key: "price",
      width: 80,
      render: (_: any, record: any) => {
        return record?.discount ? (
          <div className='flex flex-col font-bold text-black'>
            <h4>{formatPrice(record?.price)}</h4>
            <h4 className="text-green">
              {formatPrice(
                record?.price - (record?.price * record?.discount_price) / 100
              )}
            </h4>
          </div>
        ) : (
          <h4>{formatPrice(record?.price)}</h4>
        );
      },
    },
    {
      title: t("profile.views"),
      dataIndex: "views",
      key: "views",
      width: "fit-content",
      render: (views: number) => <span>{views}</span>,
    },
    {
      title: t("profile.actions"),
      key: "action",
      width: 90,
      render: (_: any, record: ProductPropsI) => (
        <div className='flex items-center gap-3 text-[18px]'>
          <EditOutlined onClick={() => editProductHandler(record)} />
          <Popconfirm
            title={`${t("profile.delete")}`}
            description={t("profile.delete_description")}
            onConfirm={() => removeProductHander(record)}
            okText={t("profile.yes")}
            cancelText={t("profile.no")}
          >
            <DeleteOutlined />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return { columns };
};

export default useTableColumns;
