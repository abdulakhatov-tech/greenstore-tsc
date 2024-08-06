import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAppRoutes from "@utils/app-routes";

const ProfileMenu = () => {
  const { t } = useTranslation();
  const { dashboardRoutes } = useAppRoutes();

  return (
    <div className='flex flex-col gap-4 mb-7'>
      <h3 className='text-[20px] font-semibold leading-[29px] text-green'>
        {t("routes.profile")}
      </h3>

      <ul className='flex flex-col gap-[20px]'>
        {dashboardRoutes.map(({ label, path, _id, Icon }) => (
          <li key={_id}>
            <NavLink
              to={`profile/${path}`}
              className={({ isActive }) =>
                classNames(
                  "flex items-center gap-2 text-[15px] font-semibold leading-[20px]",
                  {
                    ["font-bold text-green border-l-[3px] border-green pl-2"]:
                      isActive,
                  }
                )
              }
            >
              {Icon && <Icon />}
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenu;
