import { NavLink } from "react-router-dom";
import { FC } from "react";

import { Image } from "@generic/index";
import { MockData } from "@utils/index";
import CustomSkeleton from "@tools/skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";

const ContactInfo: FC = () => {
  const isOnline = useOnlineStatus();
  const { footer_navigation } = MockData();

  const {
    contact_info: { logo, location, email, phone },
  } = footer_navigation;

  return (
    <div className='bg-[#46A3581A]'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[230px_1.5fr_1.3fr_1fr] gap-2 sm:gap-3 md:gap-4 px-[22px] py-[33px]'>
        <li className='flex items-center justify-center xl:justify-start'>
          {isOnline ? (
            <NavLink to={logo?.path}>
              <Image src={logo?.src} alt={logo?.alt} />
            </NavLink>
          ) : (
            <CustomSkeleton
              type='image'
              active
              style={{ width: "140px", height: "90px" }}
            />
          )}
        </li>
        <li className='flex items-center justify-center'>
          {isOnline ? (
            <NavLink to={location?.path} className='flex items-center gap-2'>
              <Image src={location?.src} alt={location?.alt} />
              <span className='text-[14px] font-normal leading-[22px] text-black'>
                {location?.address}
              </span>
            </NavLink>
          ) : (
            <CustomSkeleton
              type='image'
              active
              style={{ width: "140px", height: "90px" }}
            />
          )}
        </li>
        <li className='flex items-center justify-center'>
          {isOnline ? (
            <NavLink to={email?.path} className='flex items-center gap-2'>
              <Image src={email?.src} alt={email?.alt} />
              <span className='text-[14px] font-normal leading-[22px] text-black'>
                {email?.email}
              </span>
            </NavLink>
          ) : (
            <CustomSkeleton
              type='image'
              active
              style={{ width: "140px", height: "90px" }}
            />
          )}
        </li>
        <li className='flex items-center justify-center'>
          {isOnline ? (
            <NavLink to={phone?.path} className='flex items-center gap-2'>
              <Image src={phone?.src} alt={phone?.alt} />
              <span className='text-[14px] font-normal leading-[22px] text-black'>
                {phone?.phoneNumber}
              </span>
            </NavLink>
          ) : (
            <CustomSkeleton
              type='image'
              active
              style={{ width: "140px", height: "90px" }}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
