import { Badge } from "antd";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  AlignRightOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import Button from "@generic/button";
import { logo } from "@utils/index";
import Image from "@generic/image";
import Locale from "../common/locale";
import NavList from "./nav-list";

const Header = () => {
  return (
    <header className='border-b-[1px] border-b-[rgba(70,163,89,0.30)]'>
      <div className='container'>
        <nav className='flex items-center justify-between h-20 gap-8'>
          <Image
            src={logo}
            alt='logo'
            className='max-w-[130px] sm:max-w-[200px]'
          />

          <NavList />

          <div className='flex items-center gap-3 sm:gap-4 md:gap-6'>
            <SearchOutlined className='cursor-pointer text-[18px] md:text-[22px] active:text-green' />
            <Badge count={0}>
              <ShoppingCartOutlined
                className='cursor-pointer  text-[18px] md:text-[22px] active:text-green'
                // onClick={shoppingCartHandler}
              />
            </Badge>
            <Badge count={0}>
              <HeartOutlined
                className='cursor-pointer  text-[18px] md:text-[22px] active:text-green'
                // onClick={wishlistHandler}
              />
            </Badge>
            <Locale />
            <AlignRightOutlined className=' text-[18px] md:text-[23px] text-black block lg:hidden cursor-pointer active:text-green' />
            <Button
              variant='primary'
              type='button'
              className={"animate-bounce w-[100px] hidden lg:block active:text-green"}
              // onClick={authHandler}
              aria-label='Login button'
            >
              <LoginOutlined  /> Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
