import { InputRef } from 'antd';
import { useEffect, useRef, useState } from 'react';

import useSearchParamsHook from '@hooks/useSearchParams';

const useSearchBarFeatures = () => {
  const { setParam, getParam, removeParam } = useSearchParamsHook();
  const searchBlogRef = useRef<InputRef | null>(null);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    const query = getParam('q');
    if (!query) {
      removeParam('q');
      setSearchVal('');
    } else {
      setSearchVal(query as string);
      searchBlogRef.current?.focus();
    }
  }, [getParam, removeParam]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        searchBlogRef.current &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1
      ) {
        searchBlogRef.current.focus({ preventScroll: true });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().replace(/\s+/g, '-');
    setParam('q', value);
    setSearchVal(e.target.value);
  };

  return { searchBlogRef, onSearchChange, searchVal };
};

export default useSearchBarFeatures;
