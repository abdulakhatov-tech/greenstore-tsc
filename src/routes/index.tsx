import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";

import useAppRoutes from "@utils/app-routes";
import MainLayout from "@layout/main-layout";
import PrivateRoute from "./private-route";

const NotFound = lazy(() => import("@pages/not-found"));
const Error = lazy(() => import("@pages/error"));

type RenderComponentT = {
  Component: any;
  path: string;
  meta: {
    title: string;
    description: string;
  };
  isPrivate?: boolean;
};

const AppRoutes = () => {
  const { t } = useTranslation();
  const { appRoutes } = useAppRoutes();

  const renderComponent: React.FC<RenderComponentT> = ({
    Component,
    path,
    meta,
    isPrivate,
  }) =>
    isPrivate ? (
      <PrivateRoute>
        <Component meta={{ path, ...meta }} />
      </PrivateRoute>
    ) : (
      <Component meta={{ path, ...meta }} />
    );

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {appRoutes?.map(
          ({
            _id,
            path,
            Component,
            hasChildren,
            children,
            isPrivate,
            meta,
          }) => {
            if (!hasChildren) {
              return (
                <Route
                  index
                  key={_id}
                  path={path}
                  element={renderComponent({
                    Component,
                    path,
                    meta,
                    isPrivate,
                  })}
                />
              );
            }

            return (
              <Route
                key={_id}
                path={path}
                element={renderComponent({ Component, path, meta, isPrivate })}
              >
                {children?.map(
                  ({
                    _id,
                    path,
                    Component,
                    hasChildren,
                    children,
                    isPrivate,
                  }) => {
                    if (!hasChildren) {
                      return (
                        <Route
                          index
                          key={_id}
                          path={path}
                          element={renderComponent({
                            Component,
                            path,
                            meta,
                            isPrivate,
                          })}
                        />
                      );
                    }

                    return (
                      <Route
                        key={_id}
                        path={path}
                        element={renderComponent({
                          Component,
                          path,
                          meta,
                          isPrivate,
                        })}
                      >
                        {children?.map(
                          ({ _id, path, Component, isPrivate }) => (
                            <Route
                              index
                              key={_id}
                              path={path}
                              element={renderComponent({
                                Component,
                                path,
                                meta,
                                isPrivate,
                              })}
                            />
                          )
                        )}
                      </Route>
                    );
                  }
                )}
              </Route>
            );
          }
        )}
      </Route>
      <Route
        path='/not-found'
        element={
          <NotFound
            meta={{
              path: "/not-found",
              title: t("meta.not_found.title"),
              description: t("meta.not_found.description"),
            }}
          />
        }
      />
      <Route
        path='/error'
        element={
          <Error
            meta={{
              path: "/error",
              title: t("meta.error.title"),
              description: t("meta.error.description"),
            }}
          />
        }
      />
      <Route path='*' element={<Navigate to='/not-found' />} />
    </Routes>
  );
};

export default AppRoutes;
