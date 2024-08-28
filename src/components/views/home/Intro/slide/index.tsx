import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

import Button from "@generic/button";
import CustomSkeleton from "@tools/skeleton";
import { AuthQuery, HeroCarouselSlideT } from "@type/index";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useSearchParamsHook from "@hooks/useSearchParams";
import Title from "@generic/typography";
import Typography from "@generic/typography";
import { useAppSelector } from "@hooks/useRedux";

type SliceT = Omit<HeroCarouselSlideT, "id">;

const Slide: FC<SliceT> = ({
  subtitle = "WELCOME TO GREENSHOP",
  title = "LET'S MAKE A BETTER",
  buttonText,
  description,
  flower_1,
  flower_2,
}) => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const navigate = useNavigate();
  const { isAuthed } = useAppSelector(({ auth }) => auth);
  const { setParam } = useSearchParamsHook();

  const handleShop = () => {
    if (isAuthed) {
      navigate("#indoor-plant-collection");
    } else {
      setParam("auth", AuthQuery.SignIn);
    }
  };

  return (
    <div className='w-full flex min-h-[300px] md:min-h-[400px] pb-[30px]'>
      <div className='w-[60%] max-md:w-[100%] md:mt-[20px]'>
        <Title size='h5' className='font-medium uppercase mb-2'>
          {subtitle}
        </Title>
        <Title size='h1' className="font-black mb-2 max-w-[320px] sm:max-w-[630px]">
          {title} <span className='text-green'>{t("home_page.planet")}</span>
        </Title>
        <Typography size='p' className='max-w-[630px] mb-4 md:mb-8 line-clamp-3'>
          {description}
        </Typography>
        <Button variant='primary' type='button' onClick={handleShop}>
          {buttonText}
        </Button>
      </div>
      <div className='w-[40%] relative flex justify-center items-center max-md:hidden md:overflow-hidden'>
        {isOnline ? (
          <>
            <img
              src={flower_1}
              alt='flower-1'
              className='absolute bottom-0 left-0 max-w-[460px]'
            />
            <img
              src={flower_2}
              alt='flower-2'
              className='absolute bottom-0 left-10 max-w-[135px]'
            />
          </>
        ) : (
          <div className='w-full flex justify-center items-end gap-3'>
            <CustomSkeleton
              type='image'
              active
              style={{ width: "70px", height: "60px" }}
            />
            <CustomSkeleton
              type='image'
              active
              style={{ width: "200px", height: "200px", alignSelf: "flex-end" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
