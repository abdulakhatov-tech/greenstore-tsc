import { Divider, Modal } from "antd";
import { FC } from "react";
import { useAppSelector } from "@hooks/useRedux";
import useAuthModalFeatures from "./features";
import { AuthHeader } from "./customs";
import MemoizedAuthForm from "./customs/form";
import MemoizedAuthWith from "./customs/auth-with";
import { AuthQuery } from "./types";

const AuthModal: FC = () => {
  const { authModalVisibility } = useAppSelector((state) => state.modal);
  const { onCancel } = useAuthModalFeatures();

  return (
    <Modal
      open={authModalVisibility.open}
      onCancel={onCancel}
      aria-labelledby='auth-modal'
      maskClosable={false}
      footer={null}
      className='max-w-[300px] md:max-w-[430px]'
    >
      <div className='w-full h-full pt-7 pb-2 px-[5px] sm:px-[20px] md:px-[25px]'>
        <AuthHeader />
        <MemoizedAuthForm />
        <Divider className='text-[13px] font-normal leading-4'>
          Or{" "}
          {authModalVisibility?.authQuery === AuthQuery.SignIn
            ? AuthQuery.SignIn
            : AuthQuery.SignUp}{" "}
          with
        </Divider>
        <MemoizedAuthWith />
      </div>
    </Modal>
  );
};

export default AuthModal;
