import { ReactNode } from "react";

export type ReactNodeT = {
  children?: ReactNode;
};

export type HeroCarouselSlideT = {
  id: number;
  title: string;
  buttonText: string;
  subtitle: string;
  description: string;
  flower_1: string;
  flower_2: string;
};

interface PermissionI {
  create?: boolean;
  update?: boolean;
  delete?: boolean;
  read?: boolean;
}

interface BillingAddressI {
  country?: string;
  town?: string;
  street_address?: string;
  extra_address?: string;
  state?: string;
  zip?: string;
}

export interface UserI {
  _id?: string;
  name?: string;
  surname?: string;
  password?: string;
  username?: string;
  permission?: PermissionI;
  email?: string;
  profile_photo?: string;
  followers?: string[];
  billing_address?: BillingAddressI;
  user_type?: string;
  create_post_limit?: number;
  create_account_limit?: number;
  create_plant_limit?: number;
  hashtags?: string[];
  wishlist?: string[];
  created_by?: string;
  order_list?: string[];
  created_at?: string;
  __v?: number;
}

export interface CategoryPropsI {
  _id: string;
  title: string;
  count: number;
  route_path: string;
  created_at: string;
  created_by: string;
  __v: string;
}

export enum SortCategoryBy {
  DEFAULT_SORTING = "default-sorting",
  THE_CHEAPEST = "the-cheapest",
  MOST_EXPENSIVE = "most-expensive",
}

export type SortCategoryByT = SortCategoryBy.DEFAULT_SORTING | SortCategoryBy.THE_CHEAPEST | SortCategoryBy.MOST_EXPENSIVE

export interface ProductPropsI {
  _id: string;
  title: string;
  price: number;
  discount: boolean;
  discount_price: number;
  short_description: string;
  description: string;
  main_image: string;
  category: string;
  detailed_images: string[];
  rate: number;
  views: number;
  tags: string[];
  comments: string[];
  created_by: string;
  created_at: Date;
  __v: number
}

export interface CartProductPropsI extends ProductPropsI {
  quantity: number;
}

export interface CouponPropsI {
  id: number;
  code: string;
  discount_for: number;
  title: string;
}

export type NotificationTypeT = "success" | "info" | "warning" | "error";

export interface NotificationPropsI {
  type: NotificationTypeT | null;
  message: string;
  description: string;
}
