import { Empty } from "antd";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { UserSwitchOutlined } from "@ant-design/icons";
import FollowerCard from "./follower-card";
import { UserI } from "@type/index";

const Followers: React.FC = () => {
  const { authorId } = useParams();
  const queryClient = useQueryClient();

  const data: UserI = queryClient.getQueryData([`user`, authorId]) ?? {};

  return (
    <div>
      {data?.followers?.length && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]'>
          {data?.followers?.map((follower: string, index: number) => (
            <FollowerCard key={index} follower={follower} />
          ))}
        </div>
      )}
      {!data?.followers?.length && (
        <div className='h-[400px] flex flex-col items-center justify-center'>
          <Empty
            description={
              <div>
                <h3 className='text-[18px] text-bold'>
                  <UserSwitchOutlined /> No followers yet...
                </h3>
                <p></p>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default Followers;
