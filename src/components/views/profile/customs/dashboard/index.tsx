import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { LogoutOutlined } from "@ant-design/icons";
import { Link, NavLink, Outlet, useOutlet } from "react-router-dom";

import useAppRoutes from "@utils/app-routes";
import useDashboardFeatures from "./features";
import { Chart } from "./customs";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const hasOutlet = useOutlet();
  const { dashboardRoutes } = useAppRoutes();
  const { logoutHandler, contextHolder } = useDashboardFeatures();

  return (
    <>
      {contextHolder}
      <div className="grid grid-cols-1 lg:grid-cols-[310px_1fr] gap-7 lg:mt-[30px]">
        <aside className="bg-[#FBFBFB] hidden lg:block">
          <Link
            to="/profile"
            className="text-[14px] md:text-[18px] font-bold leading-4 text-black block mb-[15px] px-[23px] mt-[20px]"
          >
            {t("profile.my_account")}
          </Link>
          <ul className="flex flex-col">
            {dashboardRoutes?.map(({ _id, path, label, Icon }) => (
              <li key={_id}>
                <NavLink
                  to={`${path}`}
                  className={({ isActive }) =>
                    classNames(
                      "flex items-center gap-[11px] px-[23px] leading-[45px] border-l-4 hover:text-green hover:text-[17px] hover:font-bold hover:bg-[#fff] transition-all",
                      {
                        "text-[17px] font-bold text-green border-green bg-[#fff]":
                          isActive,
                        "text-[15px] font-normal text-black border-transparent":
                          !isActive,
                      }
                    )
                  }
                >
                  <Icon /> 
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            onClick={logoutHandler}
            className="flex items-center gap-[11px] text-[15px] md:text-[17px] font-bold leading-4 text-[#727272] hover:text-[crimson] px-[27px] py-[20px] mt-[15px] border-t border-[rgba(70,163,89,0.29)]"
          >
            <LogoutOutlined />
            <span>{t("profile.log_out")}</span>
          </div>
        </aside>
        <div>{hasOutlet ? <Outlet /> : <Chart />}</div>
      </div>
    </>
  );
};

export default Dashboard;
