import { ExclamationCircleFilled } from "@ant-design/icons";
import { useAuth } from "@config/auth";
import { message, Modal } from "antd";
import { useTranslation } from "react-i18next";
const { confirm } = Modal;

const useDashboardFeatures = () => {
   const { t } = useTranslation();
  const { signOut } = useAuth();
  const [messageApi, contextHolder] = message.useMessage();

  const logoutHandler = () => {
    confirm({
      title: t('profile.log_out_message'),
      icon: <ExclamationCircleFilled />,
      content:
        "",
      okText: t('profile.log_out'),
      cancelText: t('profile.cancelText'),
      okType: "danger",
      async onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            Math.random() > 0.5 ? resolve(signOut()) : reject;
          }, 1000);
        }).catch(() =>
          messageApi.open({
            type: "error",
            content: t('profile.log_out_error'),
          })
        );
      },
      onCancel() {},
    });
  };

  return { logoutHandler, contextHolder };
};

export default useDashboardFeatures;
