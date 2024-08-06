import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { FC } from "react";

import useAuthHeaderFeatures from "./features";
import { AuthQuery } from "@type/index";

const AuthHeader: FC = () => {
  const { t } = useTranslation(); 
  const { authQuery, authTypeHandler } = useAuthHeaderFeatures();

  return (
    <ul
      className='flex items-center justify-center gap-3 text-[20px] leading-4 pb-[40px]'
      role='tablist'
      aria-label='Authentication Options'
    >
      <li role='tab'>
        <h4
          onClick={() => authTypeHandler(AuthQuery.SignIn)}
          className={classNames({
            ["font-semibold text-green"]: authQuery === AuthQuery.SignIn,
            ["font-normal text-black"]: authQuery !== AuthQuery.SignIn,
          })}
          aria-selected={authQuery === AuthQuery.SignIn}
        >
          {t('modal.auth.sign_in')}
        </h4>
      </li>
      <li>
        <div className='h-[18px] border-[1px] border-black'></div>
      </li>
      <li role='tab'>
        <h4
          onClick={() => authTypeHandler(AuthQuery.SignUp)}
          className={classNames({
            ["font-semibold text-green"]: authQuery === AuthQuery.SignUp,
            ["font-normal text-black"]: authQuery !== AuthQuery.SignUp,
          })}
          aria-selected={authQuery === AuthQuery.SignUp}
        >
          {t('modal.auth.sign_up')}
        </h4>
      </li>
    </ul>
  );
};

export default AuthHeader;
