import { useTranslation } from "react-i18next";
import { MdOutlineDone } from "react-icons/md";
import { LabelT } from "../types";

export const Label = ({ item }: { item: LabelT }): JSX.Element => {
  const { i18n } = useTranslation();

  const { key, src, label, alt } = item;

  const onLanguageHandler = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  return (
    <div
      className='flex items-center gap-2'
      onClick={() => onLanguageHandler(key)}
    >
      <img src={src} alt={alt} className='inline-block w-[30px] h-[20px]' />
      <span>{label}</span>
      {i18n.language === key && (
        <MdOutlineDone className='text-[20px] font-bold text-green' />
      )}
    </div>
  );
};
