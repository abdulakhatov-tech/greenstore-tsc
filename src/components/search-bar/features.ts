import { useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useEffect, useRef, useState } from "react";

const useSearchBarFeatures = () => {
  const { open } = useAppSelector((state) => state.search);
  const {setParam, getParam, removeParam} = useSearchParamsHook()
  const searchRef = useRef<HTMLInputElement | null>(null);
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
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1
      ) {
        searchRef.current?.focus();
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
