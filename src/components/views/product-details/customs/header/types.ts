import { ReactNode } from "react";

export interface RoutesI {
    breadcrumbName: string | ReactNode;
    path: string;
}