import { ReactNode } from "react";

export type ReactNodeT = {
  children?: ReactNode
};

export type HeroCarouselSlideT = {
  id: number;
  title: string;
  buttonText: string;
  subtitle: string;
  description: string;
  flower_1: string;
  flower_2: string;
}

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