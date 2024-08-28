import { ExclamationCircleFilled } from "@ant-design/icons";
import { useAppDispatch } from "@hooks/useRedux";
import { signOut } from "@redux/slices/auth";
import { message, Modal } from "antd";
import { useTranslation } from "react-i18next";
const { confirm } = Modal;

const useDashboardFeatures = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const logoutHandler = () => {
    confirm({
      title: t("profile.log_out_message"),
      icon: <ExclamationCircleFilled />,
      content: "",
      okText: t("profile.log_out"),
      cancelText: t("profile.cancelText"),
      okType: "danger",
      async onOk() {
        try {
          dispatch(signOut())
        } catch (error) {
          messageApi.open({
            type: "error",
            content: t("profile.log_out_error"),
          });
        }
      },
      onCancel() {},
    });
  };

  return { logoutHandler, contextHolder };
};

export default useDashboardFeatures;
