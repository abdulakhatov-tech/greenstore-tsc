import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import useNewsletterFeatures from "./features";
import FooterTitle from "@components/footer/customs/title";
import Button from "@generic/button";

const Newsletter: FC<{ className: string }> = ({ className }) => {
  const { t } = useTranslation();
  const emailRef = useRef<HTMLInputElement>(null);
  const { onSubmit, loading } = useNewsletterFeatures();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        emailRef?.current?.focus();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${className} pt-4`}>
      <FooterTitle>{t("footer_navigation.newsletter.title")}</FooterTitle>

      <form className='my-[20px]' onSubmit={onSubmit}>
        <div className='flex items-center max-w-[500px]'>
          <input
            type='email'
            ref={emailRef}
            placeholder={t("footer_navigation.newsletter.placeholder")}
            required
            className='mr-0 w-full h-[30px] sm:h-[35px] md:h-[40px] px-[12px] py-[11px] bg-white border border-green rounded-[6px] rounded-tr-none rounded-br-none outline-green'
          />
          <Button
            type='submit'
            loading={loading}
            variant='primary'
            className='rounded-tl-none rounded-bl-none ml-0'
          >
            {t("footer_navigation.newsletter.button_text")}
          </Button>
        </div>
      </form>

      <p className='text-gray text-base'>
        {t("footer_navigation.newsletter.description")}
      </p>
    </div>
  );
};

export default Newsletter;
