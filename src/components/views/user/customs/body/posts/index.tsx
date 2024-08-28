import { Empty } from "antd";
import { HighlightOutlined } from "@ant-design/icons";

import useBlogsServices from "@services/blogs";
import PostList from "./post-list";
import { useTranslation } from "react-i18next";

const Posts: React.FC = () => {
  const { t } = useTranslation();
  const { getAllBlogsCreatedBy } = useBlogsServices();
  const { data } = getAllBlogsCreatedBy;

  return (
    <div>
      <PostList />
      {!data?.length && (
        <div className='h-[400px] flex flex-col items-center justify-center'>
          <Empty
            description={
              <div>
                <h3 className='text-[18px] text-bold'>
                  <HighlightOutlined /> {t("user.no_posts_yet")}...
                </h3>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default Posts;
