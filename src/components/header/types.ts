
export interface NavListPropsI {
  isMobile?: boolean;
}

export type ListItemT = {
  label: string;
  path: string;
  isMobile?: boolean;
};


export type UseHeaderFeaturesT = {
  handleSearch: () => void; 
  handleAuth: () => void; 
  handleUser: () => void;
};
