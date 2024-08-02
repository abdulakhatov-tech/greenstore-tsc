import Input from "@generic/input";
import { FC } from "react";
import useSearchBarFeatures from "./features";

const searchBar = "max-h-0 overflow-hidden opacity-0";
const openSearchBar = "max-h-[200px] opacity-1 pt-3 pb-0 md:pt-5 md:pb-2 ";

const SearchBar: FC = () => {
  const { searchRef, open, onSearchChange, searchVal } = useSearchBarFeatures();

  return (
    <section
      id='search-bar'
      className={`transition-all duration-200 ease-in ${
        open ? openSearchBar : searchBar
      }`}
    >
      <div className='container'>
        <div className='flex items-center justify-center'>
          <Input
            size='small'
            ref={searchRef}
            placeholder='Search...'
            onChange={onSearchChange}
            value={searchVal}
            className='max-w-[600px] min-w-[270px] sm:min-w-[320px] md:min-w-[400px]'
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
