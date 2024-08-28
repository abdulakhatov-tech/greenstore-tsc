import { lazy, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import useAppRoutes from "@utils/app-routes";
import MainLayout from "@layout/main-layout";
import { useAppSelector } from "@hooks/useRedux";

const NotFound = lazy(() => import("@pages/not-found"))
const Error = lazy(() => import("@pages/error"));
const AppRoutes = () => {
  const navigate = useNavigate();
  const { appRoutes } = useAppRoutes();
  const { isAuthed } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if(!isAuthed) {
      navigate("/") // Redirect to login page if not authenticated
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthed])

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
