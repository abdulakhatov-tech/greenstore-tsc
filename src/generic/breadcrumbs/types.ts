import { ReactNode } from "react";

export interface BreadcrumbsPropsI
  extends React.HTMLAttributes<HTMLDivElement> {
  routes: { path: string; breadcrumbName: string  | ReactNode }[];
  className?: string;
}
