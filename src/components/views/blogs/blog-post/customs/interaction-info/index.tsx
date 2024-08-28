import { Dropdown } from "antd";

import {
  EyeOutlined,
  CommentOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import useBlogsServices from "@services/blogs";
import useInteractionsInfoFeatures from "./features";
import useOnlineStatus from "@hooks/useOnlineStatus";
import { formatDate } from "@helpers/index";

const InteractionInfo: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { getBlogById } = useBlogsServices();
  const { isLoading, isError, data } = getBlogById;

  const { items } = useInteractionsInfoFeatures();

  const loader = isLoading || isError || !isOnline;

  return (
    <div className='flex items-center justify-between flex-wrap gap-3'>
      <div className='flex items-center gap-4 italic'>
        <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
          <EyeOutlined /> {loader ? 0 : data?.views}
        </div>
        <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
          <CommentOutlined /> {loader ? 0 : 0}
        </div>
        <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
          <HeartOutlined /> {loader ? 0 : data?.reaction_length}
        </div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
            <ShareAltOutlined /> {loader ? 0 : 0}
          </div>
        </Dropdown>
      </div>

      {data?.created_at && <p className="italic">{formatDate(data?.created_at)}</p>}
    </div>
  );
};

export default InteractionInfo;
