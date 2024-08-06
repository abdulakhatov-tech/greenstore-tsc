import { useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";
import { InputRef } from "antd";
import { useEffect, useRef, useState } from "react";

const useSearchBarFeatures = () => {
  const { open } = useAppSelector((state) => state.search);
  const {setParam, getParam, removeParam} = useSearchParamsHook()
  const searchRef = useRef<InputRef | null>(null);
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    if(!getParam('search') || !open) {
        removeParam('search');
        setSearchVal('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getParam('search'), open])

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  
    const handleScroll = () => {
      if (searchRef.current && document.activeElement !== searchRef.current) {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 1
        ) {
          // Only focus if it's not already focused
          searchRef.current.focus({ preventScroll: true });
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);
  


  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParam('search', e.target.value);
    setSearchVal(e.target.value);
  }

  return { searchRef, open, onSearchChange, searchVal };
};

export default useSearchBarFeatures;
