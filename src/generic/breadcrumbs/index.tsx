import { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { BreadcrumbsPropsI } from "./types";

const Breadcrumbs:FC<BreadcrumbsPropsI> = memo(({ routes, ...props }) => {
  return (
    <div className='py-2' {...props}>
      {routes.map((route, index) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
        >
          {route.breadcrumbName}{" "}
          {routes?.length - 1 !== index && (
            <span className='font-normal'>/</span>
          )}{" "}
        </NavLink>
      ))}
    </div>
  );
});

export default Breadcrumbs;
