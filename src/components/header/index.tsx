import { Badge, Tooltip } from "antd";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  AlignRightOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Image from "@generic/image";
import Button from "@generic/button";
import { logo } from "@utils/index";
import CustomSkeleton from "@tools/skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";
import Locale from "../common/locale";
import useFeaturesHeader from "./features";
import { NavList } from "./custom";

const Header = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { handleSearch } = useFeaturesHeader();

  const renderLogo = () => (
    <Link to='/'>
      <Image src={logo} alt='logo' className='max-w-[130px] sm:max-w-[200px]' />
    </Link>
  );

  const renderSkeleton = () => <CustomSkeleton type='input' active />;

  return (
    <header className='border-b border-b-[rgba(70,163,89,0.30)]'>
      <div className='container'>
        <nav className='flex items-center justify-between h-20 gap-8'>
          {isOnline ? renderLogo() : renderSkeleton()}
          <NavList />
          <div className='flex items-center gap-3 sm:gap-4 md:gap-6'>
            <Tooltip color='#46A358' title={t("header.search")}>
              <SearchOutlined onClick={handleSearch} className='cursor-pointer text-[18px] md:text-[22px] hover:text-green' />
            </Tooltip>
            <Tooltip
              color='#46A358'
              title={t("header.shopping_cart")}
            >
              <Badge count={0} overflowCount={99}>
                <ShoppingCartOutlined className='cursor-pointer text-[18px] md:text-[22px] hover:text-green' />
              </Badge>
            </Tooltip>
            <Tooltip color='#46A358' title={t("header.favourites")}>
              <Badge count={0} overflowCount={99}>
                <HeartOutlined className='cursor-pointer text-[18px] md:text-[22px] hover:text-green' />
              </Badge>
            </Tooltip>
            <Locale />
            <AlignRightOutlined className='text-[18px] md:text-[23px] text-black block lg:hidden cursor-pointer hover:text-green' />
            <Button
              variant='primary'
              type='button'
              className='animate-bounce w-[100px] hidden lg:block'
              aria-label='Login button'
            >
              <LoginOutlined /> {t("header.login")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
