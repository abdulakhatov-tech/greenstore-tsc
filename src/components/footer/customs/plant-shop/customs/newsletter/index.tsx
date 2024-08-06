import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import useNewsletterFeatures from "./features";
import Button from "@generic/button";
import Input from "@generic/input";
import { InputRef } from "antd";
import Typography from "@generic/typography";

const Newsletter: FC<{ className: string }> = ({ className }) => {
  const { t } = useTranslation();
  const emailRef = useRef<InputRef>(null);
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
      <Typography size='h4' className="font-bold leading-6">{t("footer_navigation.newsletter.title")}</Typography>

      <form className='my-[20px]' onSubmit={onSubmit}>
        <div className='flex items-center max-w-[500px]'>
          <Input
            type='email'
            ref={emailRef}

            placeholder={t("footer_navigation.newsletter.placeholder")}
            required
            className='w-full h-[35px] md:h-[40px] border border-green rounded-[6px] rounded-tr-none rounded-br-none outline-green'
          />
          <Button
            type='submit'
            loading={loading}
            variant='primary'
            className='h-[35px] md:h-[40px] rounded-tl-none rounded-bl-none ml-0'
          >
            {t("footer_navigation.newsletter.button_text")}
          </Button>
        </div>
      </form>

      <Typography size='p' className='text-gray text-base'>
        {t("footer_navigation.newsletter.description")}
      </Typography>
    </div>
  );
};

export default Newsletter;
