import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import Button from '@generic/button';
import Input from '@generic/input';
import useSearchBarFeatures from './features';

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const { searchBlogRef, onSearchChange, searchVal } = useSearchBarFeatures();

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="font-bold text-2xl">{t('blog.my_feed')}</h2>
      <form className="w-full mt-5">
        <div className="flex items-center w-11/12 md:w-3/5 mx-auto">
          <Input
            type="search"
            placeholder={`${t('blog.search')}...`}
            className="rounded-r-none h-9 md:h-10"
            ref={searchBlogRef}
            onChange={onSearchChange}
            value={searchVal}
          />
          <Button variant="primary" className="rounded-l-none h-9 md:h-10">
            <SearchOutlined />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
