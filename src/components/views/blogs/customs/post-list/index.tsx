import React from 'react';
import { useTranslation } from 'react-i18next';

import BlogSkeleton from '@tools/skeleton/blog-skeleton';
import useOnlineStatus from '@hooks/useOnlineStatus';
import usePostListFeatures from './features';
import { BlogCardType } from '@type/index';
import Button from '@generic/button';
import Post from './post';

const PostList: React.FC = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const {
    isLoading,
    isError,
    isLoadMoreVisible,
    loadLessHandler,
    loadMoreHandler,
    loadedBlog,
    data,
  } = usePostListFeatures();

  const renderPosts = () => {
    if (!isOnline || isLoading || isError) {
      return Array.from({ length: 9 }).map((_, index) => (
        <BlogSkeleton key={index} />
      ));
    }
    return loadedBlog.map((post: BlogCardType) => (
      <Post key={post?._id} {...post} />
    ));
  };

  return (
    <div className="flex flex-col gap-8">
      <div
        className="mt-8 w-full grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1"
        id="blog"
      >
        {renderPosts()}
      </div>

      <div className="w-fit mx-auto flex gap-4">
        {isLoadMoreVisible && loadedBlog.length < (data?.length ?? 0) && (
          <Button variant="primary" onClick={loadMoreHandler}>
            {t('blog.load_more')}
          </Button>
        )}
        {loadedBlog.length > 9 && (
          <Button variant="secondary" onClick={loadLessHandler}>
            {t('blog.load_less')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostList;
