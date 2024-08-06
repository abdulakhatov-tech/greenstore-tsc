import { CloseOutlined } from "@ant-design/icons";

import { logo } from "@utils/index";
import { Image } from "@generic/index";
import CustomSkeleton from "@tools/skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useSideMenuModalFeatures from "../../features";

const Header = () => {
  const isOnline = useOnlineStatus();
  const { onClose } = useSideMenuModalFeatures();

  return (
    <div className='flex items-center justify-between'>
      {isOnline ? (
        <Image src={logo} alt='greenshop' className='max-w-[130px]' />
      ) : (
        <CustomSkeleton type='input' active />
      )}
      <div className='flex items-center gap-4'>
        <CloseOutlined
          className='active:scale-95'
          onClick={onClose}
          aria-label='Close Menu'
        />
      </div>
    </div>
  );
};

export default Header;
