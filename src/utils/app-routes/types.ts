
export type RoutePropT = {
  _id: string | number;
  path: string;
  Component: any;
  Icon?: any;
  label: string;
  hidden: boolean;
  hasChildren?: boolean;
  children?: RoutePropT[];
  meta: {
    title: string;
    description: string;
  };
  isPrivate?: boolean,
};
