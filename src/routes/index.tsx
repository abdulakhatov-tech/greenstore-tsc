import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import useAppRoutes from "@utils/app-routes";
import MainLayout from "@layout/main-layout";

const NotFound = lazy(() => import("@pages/not-found"))
const Error = lazy(() => import("@pages/error"));
const AppRoutes = () => {
  const { appRoutes } = useAppRoutes();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {appRoutes?.map(({ _id, path, Component, hasChildren, children }) => {
          if (!hasChildren) {
            return (
              <Route index key={_id} path={path} element={<Component />} />
            );
          }

          return (
            <Route key={_id} path={path} element={<Component />}>
              {children?.map(
                ({ _id, path, Component, hasChildren, children }) => {
                  if (!hasChildren) {
                    return (
                      <Route
                        index
                        key={_id}
                        path={path}
                        element={<Component />}
                      />
                    );
                  }

                  return (
                    <Route key={_id} path={path} element={<Component />}>
                      {children?.map(({ _id, path, Component }) => (
                        <Route
                          index
                          key={_id}
                          path={path}
                          element={<Component />}
                        />
                      ))}
                    </Route>
                  );
                }
              )}
            </Route>
          );
        })}
      </Route>
      <Route path='/not-found' element={<NotFound />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Navigate to='/not-found' />} />
    </Routes>
  );
};

export default AppRoutes;
