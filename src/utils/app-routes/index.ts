import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { lazy, useId } from "react";
import { RoutePropT } from "./types";

const Home = lazy(() => import("@pages/home"));
const Shop = lazy(() => import("@pages/shop"));
const ProductDetails = lazy(() => import("@pages/product-details"));
const ShoppingCart = lazy(() => import("@pages/shopping-cart"));
const Checkout = lazy(() => import("@pages/checkout"));
const PlantCare = lazy(() => import("@pages/plant-care"));
const Blogs = lazy(() => import("@pages/blogs"));
const Profile = lazy(() => import("@pages/profile"));
const AccountDetails = lazy(() => import("@pages/profile/account-details"));
const MyProducts = lazy(() => import("@pages/profile/my-products"));
const Address = lazy(() => import("@pages/profile/address"));
const Wishlist = lazy(() => import("@pages/profile/wishlist"));
const TrackOrder = lazy(() => import("@pages/profile/track-order"));
const NotFound = lazy(() => import("@pages/not-found"));
const Error = lazy(() => import("@pages/error"));

const useAppRoutes = () => {
  const generateId = useId;

  const dashboardRoutes: RoutePropT[] = [
    {
      _id: generateId(),
      path: "account-details",
      Component: AccountDetails,
      label: "Account Details",
      Icon: UserOutlined,
      hidden: true,
      meta: {
        title: "Account Details",
        description: "Account Details",
      },
    },
    {
      _id: generateId(),
      path: "my-products",
      Component: MyProducts,
      label: "My Products",
      Icon: ShoppingOutlined,
      hidden: true,
      meta: {
        title: "My Products",
        description: "My Products",
      },
    },
    {
      _id: generateId(),
      path: "address",
      Component: Address,
      label: "Address",
      Icon: EnvironmentOutlined,
      hidden: true,
      meta: {
        title: "Address",
        description: "Address",
      },
    },
    {
      _id: generateId(),
      path: "wishlist",
      Component: Wishlist,
      label: "Wishlist",
      Icon: HeartOutlined,
      hidden: true,
      meta: {
        title: "Wishlist",
        description: "Wishlist",
      },
    },
    {
      _id: generateId(),
      path: "track-order",
      Component: TrackOrder,
      label: "Track Order",
      Icon: DashboardOutlined,
      hidden: true,
      meta: {
        title: "Track Order",
        description: "Track Order",
      },
    },
  ];

  const shopRoutes: RoutePropT[] = [
    {
      _id: generateId(),
      path: "product/:category/:productId",
      Component: ProductDetails,
      label: "Product Detail",
      hidden: true,

      meta: {
        title: "Product Detail",
        description: "Learn more about this product",
      },
    },
    {
      _id: generateId(),
      path: "shopping-cart",
      Component: ShoppingCart,
      label: "Shopping Cart",
      hidden: true,
      meta: {
        title: "Shopping Cart",
        description: "Shopping Cart",
      },
    },

    {
      _id: generateId(),
      path: "checkout",
      Component: Checkout,
      label: "Checkout",
      hidden: true,
      meta: {
        title: "Checkout",
        description: "Checkout",
      },
    },
  ];

  const appRoutes: RoutePropT[] = [
    {
      _id: generateId(),
      path: "/",
      Component: Home,
      label: "Home",
      hidden: false,
      meta: {
        title: "Green Store",
        description: "Welcome to Green Store",
      },
    },
    {
      _id: generateId(),
      path: "/shop",
      Component: Shop,
      label: "Shop",
      hidden: false,
      meta: {
        title: "Shop",
        description: "Discover our products",
      },
      hasChildren: true,
      children: shopRoutes,
    },
    {
      _id: generateId(),
      path: "/plant-care",
      Component: PlantCare,
      label: "Plant Care",
      hidden: false,
      meta: {
        title: "Plant Care",
        description: "Learn about the best plants for your home",
      },
    },
    {
      _id: generateId(),
      path: "/blogs",
      Component: Blogs,
      label: "Blogs",
      hidden: false,
      meta: {
        title: "Blogs",
        description: "Latest news and updates from Green Store",
      },
    },
    {
      _id: generateId(),
      path: "/profile",
      Component: Profile,
      label: "Profile",
      hidden: true,
      meta: {
        title: "Profile",
        description: "Profile",
      },
      hasChildren: true,
      children: dashboardRoutes,
    },
    {
      _id: generateId(),
      path: "/not-found",
      Component: NotFound,
      label: "Page Not Found",
      hidden: true,
      meta: {
        title: "Page Not Found",
        description: "Sorry, the page you are looking for does not exist",
      },
    },
    {
      _id: generateId(),
      path: "/error",
      Component: Error,
      label: "Error Page",
      hidden: true,
      meta: {
        title: "Error Page",
        description: "An error occurred on the server",
      },
    },
  ];

  return { appRoutes, dashboardRoutes };
};

export default useAppRoutes;
