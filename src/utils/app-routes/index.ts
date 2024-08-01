import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { lazy, useId } from "react";
import { RoutePropT } from "./types";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const generateId = useId;

  const dashboardRoutes: RoutePropT[] = [
    {
      _id: generateId(),
      path: "account-details",
      Component: AccountDetails,
      label: t("routes.account_details") ?? "Account Details",
      Icon: UserOutlined,
      hidden: true,
      meta: {
        title: t("meta.account_details.title") ?? "Account Details",
        description: t("meta.account_details.description") ?? "Account Details",
      },
    },
    {
      _id: generateId(),
      path: "my-products",
      Component: MyProducts,
      label: t("routes.my_products") ?? "My Products",
      Icon: ShoppingOutlined,
      hidden: true,
      meta: {
        title: t("meta.my_products.title") ?? "My Products",
        description: t("meta.my_products.description") ?? "My Products",
      },
    },
    {
      _id: generateId(),
      path: "address",
      Component: Address,
      label: t("routes.address") ?? "Address",
      Icon: EnvironmentOutlined,
      hidden: true,
      meta: {
        title: t("meta.address.title") ?? "Address",
        description: t("meta.address.description") ?? "Address",
      },
    },
    {
      _id: generateId(),
      path: "wishlist",
      Component: Wishlist,
      label: t("routes.wishlist") ?? "Wishlist",
      Icon: HeartOutlined,
      hidden: true,
      meta: {
        title: t("meta.wishlist.title") ?? "Wishlist",
        description: t("meta.wishlist.description") ?? "Wishlist",
      },
    },
    {
      _id: generateId(),
      path: "track-order",
      Component: TrackOrder,
      label: t("routes.track_order") ?? "Track Order",
      Icon: DashboardOutlined,
      hidden: true,
      meta: {
        title: t("meta.wishlist.title") ?? "Track Order",
        description: t("meta.wishlist.description") ?? "Track Order",
      },
    },
  ];

  const shopRoutes: RoutePropT[] = [
    {
      _id: generateId(),
      path: "product/:category/:productId",
      Component: ProductDetails,
      label: t("routes.product_details") ?? "Product Details",
      hidden: true,
      meta: {
        title: t("meta.product_details.title") ?? "Product Detail",
        description:
          t("meta.product_details.description") ??
          "Learn more about this product",
      },
    },
    {
      _id: generateId(),
      path: "shopping-cart",
      Component: ShoppingCart,
      label: t("routes.shopping_cart") ?? "Shopping Cart",
      hidden: true,
      meta: {
        title: t("meta.shopping_cart") ?? "Shopping Cart",
        description: t("meta.shopping_cart.description") ?? "Shopping Cart",
      },
    },

    {
      _id: generateId(),
      path: "checkout",
      Component: Checkout,
      label: t("routes.checkout") ?? "Checkout",
      hidden: true,
      meta: {
        title: t("meta.checkout.title") ?? "Checkout",
        description: t("meta.checkout.description") ?? "Checkout",
      },
    },
  ];

  const appRoutes: RoutePropT[] = [
    {
      _id: generateId(),
      path: "/",
      Component: Home,
      label: t("routes.home") ?? "Home",
      hidden: false,
      meta: {
        title: t("meta.home.title") ?? "Green Store",
        description: t("meta.home.description") ?? "Welcome to Green Store",
      },
    },
    {
      _id: generateId(),
      path: "/shop",
      Component: Shop,
      label: t("routes.shop") ?? "Shop",
      hidden: false,
      meta: {
        title: t("meta.shop.title") ?? "Shop",
        description: t("meta.shop.description") ?? "Discover our products",
      },
      hasChildren: true,
      children: shopRoutes,
    },
    {
      _id: generateId(),
      path: "/plant-care",
      Component: PlantCare,
      label: t("routes.plant_care") ?? "Plant Care",
      hidden: false,
      meta: {
        title: t("meta.plant_care.title") ?? "Plant Care",
        description:
          t("meta.plant_care.description") ??
          "Learn about the best plants for your home",
      },
    },
    {
      _id: generateId(),
      path: "/blogs",
      Component: Blogs,
      label: t("routes.blogs") ?? "Blogs",
      hidden: false,
      meta: {
        title: t("meta.blogs.title") ?? "Blogs",
        description:
          t("meta.blogs.description") ??
          "Latest news and updates from Green Store",
      },
    },
    {
      _id: generateId(),
      path: "/profile",
      Component: Profile,
      label: t("routes.profile") ?? "Profile",
      hidden: true,
      meta: {
        title: t("meta.profile.title") ?? "Profile",
        description: t("meta.profile.description") ?? "Profile",
      },
      hasChildren: true,
      children: dashboardRoutes,
    },
    {
      _id: generateId(),
      path: "/not-found",
      Component: NotFound,
      label: t("routes.not_found") ?? "Page Not Found",
      hidden: true,
      meta: {
        title: t("meta.not_found.title") ?? "Page Not Found",
        description:
          t("meta.not_found.description") ??
          "Sorry, the page you are looking for does not exist",
      },
    },
    {
      _id: generateId(),
      path: "/error",
      Component: Error,
      label: t("routes.error") ?? "Error Page",
      hidden: true,
      meta: {
        title: t("meta.error.title") ?? "Error Page",
        description:
          t("meta.error.description") ?? "An error occurred on the server",
      },
    },
  ];

  return { appRoutes, dashboardRoutes };
};

export default useAppRoutes;
