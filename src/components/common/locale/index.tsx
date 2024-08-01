import { Dropdown, Tooltip } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

import { FC, useEffect } from "react";

import { Label } from "./label";
import { LabelT } from "./types";
import { MockData } from "@utils/index";
import { useTranslation } from "react-i18next";

const Locale: FC = () => {
  const { t } = useTranslation();
  const { langData } = MockData();

  // Getting the current language from localStorage.
  const currentLang = localStorage.getItem("i18nextLng") || "en-US";

  useEffect(() => {
    const supportedLanguages = ["en-US", "uz", "ru"];
    if (!supportedLanguages.includes(currentLang)) {
      localStorage.setItem("i18nextLng", "en-US");
    }
  }, [currentLang]);

  // Mapping language data to dropdown items.
  const items = langData.map((item: LabelT) => ({
    key: item.key,
    label: <Label item={item} />,
  }));

  // Determining the current language title for tooltip display.
  const currentTitle = langData.find(({ key }) => key === currentLang);

  return (
    <Dropdown
      menu={{ items }}
      placement='bottomRight'
      trigger={["click"]}
      aria-label='Select Language'
    >
      <Tooltip
        title={`${t('header.language')}: ${currentTitle?.label || "Unknown"}`}
        color='#46A358'
      >
        <GlobalOutlined className='cursor-pointer text-[18px] md:text-[22px] active:text-green' />
      </Tooltip>
    </Dropdown>
  );
};

export default Locale;
