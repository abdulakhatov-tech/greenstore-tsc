
export interface NavListPropsI {
  isMobile?: boolean;
}

export type ListItemT = {
  label: string;
  path: string;
  isMobile?: boolean;
};


export type UseHeaderFeaturesT = {
  handleAuth: () => void; 
  handleUser: () => void;
  handleSideMenu: () => void;
  handleShoppingCart: () => void;
  handleWishlist: () => void;
};
