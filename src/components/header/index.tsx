import { Link } from "react-router-dom";

import Image from "@generic/image";
import { logo } from "@utils/index";
import CustomSkeleton from "@tools/skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";
import { Actions, NavList } from "./custom";

const Header = () => {
  const isOnline = useOnlineStatus();

  const renderLogo = () => (
    <Link to='/'>
      <Image src={logo} alt='logo' className='max-w-[120px] sm:max-w-[200px]' />
    </Link>
  );

  const renderSkeleton = () => <CustomSkeleton type='input' active />;

  return (
    <header className='border-b border-b-[rgba(70,163,89,0.30)]'>
      <div className='container'>
        <nav className='flex items-center justify-between h-20 gap-3 sm:gap-6'>
          {isOnline ? renderLogo() : renderSkeleton()}
          <NavList />
          <Actions />
        </nav>
      </div>
    </header>
  );
};

export default Header;
