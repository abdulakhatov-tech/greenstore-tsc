import { useEffect, useState } from 'react';
import { message } from 'antd';

import useBlogsServices from '@services/blogs';
import { BlogCardType } from '@type/index';

const usePostListFeatures = () => {
  const { getAllBlogs } = useBlogsServices();
  const { isLoading, isError, data } = getAllBlogs;

  const [loadedBlog, setLoadedBlog] = useState<BlogCardType[]>([]);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      const initialBlogs = data.slice(0, 9);
      setLoadedBlog(initialBlogs);
      setIsLoadMoreVisible(data.length > initialBlogs.length);
    }
  }, [data]);

  const loadMoreHandler = () => {
    if (data && loadedBlog.length < data.length) {
      const nextLength = loadedBlog.length + 3;
      const moreBlogs = data.slice(loadedBlog.length, nextLength);

      setLoadedBlog((prevBlogs) => [...prevBlogs, ...moreBlogs]);
      setIsLoadMoreVisible(nextLength < data.length);
    } else {
      message.info('No more blog posts to load');
    }
  };

  const loadLessHandler = () => {
    const newLength = Math.max(loadedBlog.length - 3, 9);
    setLoadedBlog(data?.slice(0, newLength) ?? []);
    setIsLoadMoreVisible(newLength < (data?.length ?? 0));
  };

  return {
    isLoading,
    isError,
    isLoadMoreVisible,
    loadLessHandler,
    loadMoreHandler,
    loadedBlog,
    data,
  };
};

export default usePostListFeatures;
