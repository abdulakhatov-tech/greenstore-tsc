import { InputRef } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
import useSearchParamsHook from '@hooks/useSearchParams';

const useSearchBarFeatures = () => {
  const { setParam, getParam, removeParam } = useSearchParamsHook();
  const searchBlogRef = useRef<InputRef | null>(null);
  const [searchVal, setSearchVal] = useState('');

  // Memoize the query parameter value
  const query = useMemo(() => getParam('q'), [getParam]);

  // Function to handle query and update searchVal
  const handleQuery = () => {
    if (query) {
      setSearchVal(query as string);
    } else {
      setSearchVal('');
      removeParam('q'); 
    }
  };

  useEffect(() => {
    handleQuery();

    // Focus the input on mount
    if (searchBlogRef.current) {
      searchBlogRef.current.focus();
    }

    return () => {
      setSearchVal(''); 
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // Handle search input changes
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().replace(/\s+/g, '-');
    setParam('q', value);
    setSearchVal(e.target.value);
  };

  // Focus the input when the user clicks on it
  const focusInput = () => {
    searchBlogRef.current?.focus();
  };

  return { searchBlogRef, onSearchChange, searchVal, focusInput };
};

export default useSearchBarFeatures;
