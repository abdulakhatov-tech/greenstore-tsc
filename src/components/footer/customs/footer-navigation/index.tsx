import { FC } from "react";
import { NavLink } from "react-router-dom";

import { MockData } from "@utils/index";
import useOnlineStatus from "@hooks/useOnlineStatus";
import FooterTitle from "../title";
import { Image } from "@generic/index";
import CustomSkeleton from "@tools/skeleton";

const FooterNavigation: FC = () => {
  const isOnline = useOnlineStatus();
  const { footer_navigation } = MockData();

  return (
    <div className='bg-[#FBFBFB] py-[30px] sm:my-0'>
      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 px-[15px] md:px-[22px] sm:py-[25px] md:py-[33px]'>
        <li>
          <FooterTitle>{footer_navigation["title_1"]}</FooterTitle>

          <ul className='flex flex-col gap-1 mt-2'>
            {footer_navigation["navigation"]?.map(({ _id, title, path }) => (
              <li key={_id}>
                <NavLink
                  to={path}
                  className='text-[14px] font-normal leading-[28px] hover:text-green hover:font-semibold'
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <FooterTitle>{footer_navigation["title_2"]}</FooterTitle>

          <ul className='flex flex-col gap-1 mt-2'>
            {footer_navigation["categories"]?.map(({ _id, title, path }) => (
              <li key={_id}>
                <NavLink
                  to={path}
                  className='text-[14px] font-normal leading-[28px] hover:text-green hover:font-semibold'
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li className='col-span-2 sm:col-span-1'>
          <FooterTitle>{footer_navigation["title_3"]}</FooterTitle>

          <ul className='flex items-center gap-2 mt-4'>
            {isOnline
              ? footer_navigation["social_media_links"]?.map(
                  ({ _id, title, path, href }) => (
                    <li
                      key={_id}
                      className='border border-[#46A35833] rounded-sm w-[30px] h-[30px] flex justify-center items-center cursor-pointer hover:scale-95 transition-all'
                    >
                      <a href={href} target='_blank'>
                        <Image src={path} alt={title} />
                      </a>
                    </li>
                  )
                )
              : Array.from({ length: 4 }).map((_, index) => (
                  <CustomSkeleton
                    key={index}
                    type='image'
                    active
                    style={{ width: "40px", height: "30px" }}
                  />
                ))}
          </ul>

          <FooterTitle className='mt-[20px] md:mt-[33px]'>
            {footer_navigation["title_4"]}
          </FooterTitle>

          <ul className='flex items-center gap-2 mt-2'>
            {isOnline
              ? footer_navigation["payment_links"]?.map(
                  ({ _id, title, path, href }) => (
                    <li
                      key={_id}
                      className='w-[30px] h-[30px] flex justify-center items-center cursor-pointer hover:scale-95 transition-all'
                    >
                      <a
                        href={href}
                        target='_blank'
                        className='text-[14px] font-normal hover:text-green hover:font-semibold'
                      >
                        <Image src={path} alt={title} />
                      </a>
                    </li>
                  )
                )
              : Array.from({ length: 4 }).map((_, index) => (
                  <CustomSkeleton
                    key={index}
                    type='image'
                    active
                    style={{ width: "40px", height: "30px" }}
                  />
                ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
