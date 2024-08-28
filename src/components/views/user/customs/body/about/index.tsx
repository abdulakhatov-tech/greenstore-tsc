import { Result } from "antd";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Result
      status='404'
      title={t("user.information_missing")}
      subTitle={t("user.information_missing_description")}
    />
  );
};

export default About;
