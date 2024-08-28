import React from "react";
import { Spin, Tabs } from "antd";

import useOnlineStatus from "@hooks/useOnlineStatus";
import useUsersService from "@services/users";
import CustomSkeleton from "@tools/skeleton";
import { ProfleTabType } from "@type/index";
import Container from "@layout/container";
import { MockData } from "@utils/index";

const Body: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { getUserById } = useUsersService();
  const { profile_tab_items } = MockData();

  const { isLoading, isError } = getUserById;
  const loading = isLoading || isError || !isOnline;

  return (
    <section id='user-body'>
      <Container>
        <div className='my-[40px] overflow-x-auto'>
          {loading ? (
            <div className='flex items-center gap-4'>
              {Array.from({ length: 5 }).map((_: any, index) => (
                <CustomSkeleton
                  key={index}
                  active
                  type='input'
                  style={{ width: "50px" }}
                />
              ))}
            </div>
          ) : (
            <Tabs
              size='large'
              defaultActiveKey='1'
              items={profile_tab_items.map(
                ({ Children, key, label }: ProfleTabType) => ({
                  key,
                  label,
                  children: <Children />,
                })
              )}
            />
          )}
        </div>
        {loading && (
          <div className='h-[600px] flex flex-col items-center justify-center gap-4'>
            <Spin size='large' />
            <h3>Loading...</h3>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Body;
