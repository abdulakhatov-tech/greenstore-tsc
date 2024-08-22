import { Dropdown } from "antd";

import {
  EyeOutlined,
  CommentOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import useOnlineStatus from "@hooks/useOnlineStatus";

import useBlogsServices from "@services/blogs";
import useInteractionsInfoFeatures from "./features";

const InteractionInfo: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { blogById } = useBlogsServices();
  const { isLoading, isError, data } = blogById;

  const { items } = useInteractionsInfoFeatures();

  const loading = isLoading || isError || !isOnline;

  return (
    <div className='flex items-center gap-4 italic'>
      <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
        <EyeOutlined /> {loading ? 0 : data?.views}
      </div>
      <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
        <CommentOutlined /> {loading ? 0 : 0}
      </div>
      <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
        <HeartOutlined /> {loading ? 0 : data?.reaction_length}
      </div>
      <Dropdown
        menu={{
          items,
        }}
      >
        <div className='text-black font-normal cursor-pointer text-[16px] md:text-[18px]'>
          <ShareAltOutlined /> {loading ? 0 : 0}
        </div>
      </Dropdown>
    </div>
  );
};

export default InteractionInfo;
