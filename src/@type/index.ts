import { ReactNode } from "react";

export const enum AuthQuery {
  SignIn = "sign-in",
  SignUp = "sign-up",
}

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

export interface AddressFormValuesI {
  country: string;
  extra_address: string;
  state: string;
  town: string;
  street_address: string;
  zip: string;
  name?: string;
  surname?: string;
  email?: string;
  phone_number?: string;
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
  phone_number?: string;
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

export type SortCategoryByT =
  | SortCategoryBy.DEFAULT_SORTING
  | SortCategoryBy.THE_CHEAPEST
  | SortCategoryBy.MOST_EXPENSIVE;

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
  __v: number;
}

export interface AddingEditingProductI {
  title: string;
  price: number;
  category: string;
  discount: boolean;
  discount_price: number;
  short_description: string;
  description: string;
  main_image: string;
  detailed_images: string[];
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

export interface BreadcrumbRoutesI {
  breadcrumbName: string | React.ReactNode;
  path: string;
}

export enum PAYMENT_METHODS {
  DIRECT_BANK_TRANSFER = "direct-bank-transfer",
  PAY_BY_CARD = "pay-by-card",
  CASH_ON_DELIVERY = "cash-on-delivery",
}

export type PaymentMethodT =
  | PAYMENT_METHODS.CASH_ON_DELIVERY
  | PAYMENT_METHODS.DIRECT_BANK_TRANSFER
  | PAYMENT_METHODS.PAY_BY_CARD;

export interface BillingAddressPropsI {
  additional_street?: string;
  city: string;
  country: string;
  email: string;
  method: PaymentMethodT;
  name: string;
  notes?: string;
  phone_number: string;
  postal_code: string;
  state: string;
  street: string;
  surname: string;
}

export interface FormFieldPropsI {
  labelKey?: string;
  name: string;
  rules?: object[];
  type?: string;
  addonBefore?: string;
  placeholderKey?: string;
  size?: 'small' | 'medium' | 'large';
  dependencies?: string[];
  disabled?: boolean;
}

export enum ELEMENT_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface AccountDetailsUserI {
  _id: string;
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  username: string;
  profile_photo?: any;
}

export interface LanguageOptionI {
  key: string;   
  src: string;  
  alt: string;   
  label: string; 
}

export interface PlantGalleryNavigationI {
  _id: string;  
  title: string; 
  slug: string;  
} 

export interface SortingOptionI {
  value: string; // Value used to identify the sort option
  label: string; // Localized label for the sort option
}

export interface AddressDataI {
  _id?: string;
  country: string;
  extra_address: string;
  state: string;
  town: string;
  street_address: string;
  zip: string;
  name?: string;
  surname?: string;
  email?: string;
  phone_number?: string;
}