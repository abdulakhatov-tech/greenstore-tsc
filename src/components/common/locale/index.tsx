import { Dropdown, Menu, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";
import { FC, useEffect, useMemo } from "react";
import useLocale from "@utils/locale";

const Locale: FC = () => {
  const { languages, languageData } = useLocale();
  const { i18n } = useTranslation();

  const currentLang = localStorage.getItem('i18nextLng') as string

  useEffect(() => {
    if (
      !["en-US", "uz", "ru"].includes(
        currentLang
      )
    ) {
      localStorage.setItem("i18nextLng", "en-US");
    }
  }, [currentLang]);

  const onChange = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  const items = useMemo(() => (
    <Menu onClick={(e) => onChange(e.key)}>
      {languages.map(({ key, label }) => (
        <Menu.Item key={key}>{label}</Menu.Item>
      ))}
    </Menu>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [languages]);

  const title = languageData.find(({key}) => key === currentLang )

  return (
    <Tooltip title={`Language: ${title?.label}`} placement='left' color='cyan'>
      <Dropdown
      overlay={items}
      placement='bottomRight'
      trigger={["click"]}
      aria-label='Select Language'
    >
      <GlobalOutlined className='cursor-pointer text-[18px] md:text-[22px] active:text-green' />
    </Dropdown>
    </Tooltip>
  );
};

export default Locale;
