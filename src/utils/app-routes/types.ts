import { ComponentType } from "react";

export type RoutePropT = {
  _id: string | number;
  path: string;
  Component: ComponentType;
  Icon?: any;
  label: string;
  hidden: boolean;
  hasChildren?: boolean;
  children?: RoutePropT[];
  meta: {
    title: string;
    description: string;
  };
};
