import { Image, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import useMyProductsFeatures from "./features";
import useSearchParamsHook from "@hooks/useSearchParams";
import { ProductPropsI } from "@type/index";
import { formattedDate } from "@helpers/index";
import Tooltip from "@tools/tooltip";
import { useTranslation } from "react-i18next";

const useTableColumns = () => {
   const {t } = useTranslation();
   const { removeProductHander } = useMyProductsFeatures();
   const { setParam } = useSearchParamsHook()

   const columns = [
      {
         title: t('profile.products'),
         dataIndex: "title",
         key: "title",
         render: (_: any, record:ProductPropsI) => (
            <div className="flex items-start md:items-center flex-col md:flex-row gap-[14px]">
               <Image
                  src={record?.main_image}
                  alt={record.title}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
               />
               <div className="flex flex-col gap-[6px]">
                  <Tooltip title={record.title}>
                     <h4 className="font-semibold overflow-hidden whitespace-nowrap truncate max-w-[100px] sm:max-w-fit">{record?.title}</h4>
                  </Tooltip>
                  <Tooltip title={record._id}>
                     <span className="overflow-hidden whitespace-nowrap truncate max-w-[100px] sm:max-w-fit">SKU: {record._id}</span>
                  </Tooltip>
               </div>
            </div>
         ),
      },
      {
         title: t('profile.created_at'),
         dataIndex: "created_at",
         key: "created_at",
         width: 130,
         render: (created_at:string) => formattedDate(created_at),
      },
      {
         title: t('profile.status'),
         dataIndex: "status",
         key: "status",
         width: 80,
         render: (status:string) => (status !== "active" ? "Active" : "Inactive"),
      },
      {
         title: t('profile.views'),
         dataIndex: "views",
         key: "views",
         width: 'fit-content',
         render: (views:number) => <span>{views}</span>,
      },
      {
         title: t('profile.actions'),
         key: "action",
         width: 90,
         render: (_:any, record:ProductPropsI) => (
            <div className="flex items-center gap-3 text-[18px]">
               <EditOutlined onClick={() => setParam('action-type', 'edit')} />
               <Popconfirm
                  title={`${t('profile.delete')} ${record?.title}`}
                  description={t('profile.delete_description')}
                  onConfirm={() => removeProductHander(record)}
                  okText={t('profile.yes')}
                  cancelText={t('profile.no')}
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
