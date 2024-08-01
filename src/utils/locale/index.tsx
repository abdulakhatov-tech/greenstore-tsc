import { useTranslation } from "react-i18next";
import { Label } from "./label";
import { LanguageI } from "./types";

const useLocale = () => {
  const { t } = useTranslation();

  const languageData = [
    {
      key: "uz",
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTtbS4PWhReaAegvGzcJuWEul-kFzco2bZMyhNUbmyLv7DhnLaG1S5LG01521eXIC6atLJI8Cros9RbAwe0_Ok3nInRGuHpUy2EwOi3CDmdMmW2G-p_CQkwF4hyphenhyphenltrgAqoR9tt78Fz_ApF/s1600/uz.png",
      alt: "Uzbek flag",
      label: t("locale.uz"),
    },
    {
      key: "en-US",
      src: "https://i.pinimg.com/originals/df/ab/1b/dfab1babf88c4d1ebf72d3be72c36b86.jpg",
      alt: "English flag",
      label: t("locale.en"),
    },
    {
      key: "ru",
      src: "https://avatars.mds.yandex.net/i?id=ea5f252279abb018dcb938ad79f7a7a2_l-3872711-images-thumbs&n=13",
      alt: "Russian flag",
      label: t("locale.ru"),
    },
  ];

  const languages = languageData.map(({ key, src, alt, label }: LanguageI) => ({
    key,
    label: <Label src={src} alt={alt} label={label} />,
  }));

  return { languages, languageData };
};

export default useLocale;
