import React from "react";
import { useTranslation } from "react-i18next";

import Button from "@generic/button";
import useSearchParamsHook from "@hooks/useSearchParams";
import { AuthQuery, BlogIntroMockT } from "@type/index";
import { MockData } from "@utils/index";

const Intro: React.FC = () => {
  const { t } = useTranslation();
  const { blog_intro_mock } = MockData();
  const { setParam } = useSearchParamsHook();

  return (
    <div>
      <div className='w-full p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] bg-[#F5F5F5] mt-3 flex justify-between'>
        {blog_intro_mock?.map(
          ({ _id, image_url, alt, className }: BlogIntroMockT) => (
            <img key={_id} src={image_url} className={className} alt={alt} />
          )
        )}
      </div>
      <h1 className='mt-[50px] font-black text-center text-[5vw] xl:text-[4vw]'>
        {t("blog.intro.title")} <span className='text-green'>GreenShop</span>
      </h1>
      <p className='text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] mt-[20px]'>
        {t("blog.intro.description")}
      </p>
      <Button
        variant='primary'
        className='mx-auto mt-[30px]'
        onClick={() => setParam("auth", AuthQuery.SignIn)}
      >
        {t("blog.intro.join")}
      </Button>
    </div>
  );
};

export default Intro;
