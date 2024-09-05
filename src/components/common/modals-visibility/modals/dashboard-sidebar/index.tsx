import React from "react";
import { Drawer } from "antd";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import useDashboardSidebarFeatures from "./features";
import useAppRoutes from "@utils/app-routes";

const DashboardSidebarModal: React.FC = () => {
  const { dashboardRoutes } = useAppRoutes();
  const { open, onClose } = useDashboardSidebarFeatures();

  return (
    <Drawer title='Dashboard sidebar' onClose={onClose} open={open} placement="right">
       <ul className="flex flex-col">
            {dashboardRoutes?.map(({ _id, path, label, Icon }) => (
              <li key={_id}>
                <NavLink
                  to={`profile/${path}`}
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
    </Drawer>
  );
};

export default DashboardSidebarModal;
