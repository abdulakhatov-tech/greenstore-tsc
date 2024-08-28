import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { lazy, useId } from "react";
import { useTranslation } from "react-i18next";

import { RoutePropT } from "./types";

const Home = lazy(() => import("@pages/home"));
const ProductDetails = lazy(() => import("@pages/product-details"));
const ShoppingCart = lazy(() => import("@pages/shopping-cart"));
const Checkout = lazy(() => import("@pages/checkout"));
const Blogs = lazy(() => import("@pages/blogs"));
const Profile = lazy(() => import("@pages/profile"));
const AccountDetails = lazy(() => import("@pages/profile/account-details"));
const MyProducts = lazy(() => import("@pages/profile/my-products"));
const Address = lazy(() => import("@pages/profile/address"));
const Wishlist = lazy(() => import("@pages/profile/wishlist"));
const TrackOrder = lazy(() => import("@pages/profile/track-order"));

const BlogPost = lazy(() => import("@pages/blogs/blog-post"));
const CreateBlog = lazy(() => import("@pages/blogs/create"));
const EditBlog = lazy(() => import('@pages/blogs/edit'));

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
      isPrivate: true,
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
      isPrivate: true,
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
      isPrivate: true,
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
      isPrivate: true,
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
      isPrivate: true,
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
      isPrivate: false,
    },
    {
      _id: generateId(),
      path: "/blog",
      Component: Blogs,
      label: t("routes.blogs") ?? "Blogs",
      hidden: false,
      meta: {
        title: t("meta.blogs.title") ?? "Blogs",
        description:
          t("meta.blogs.description") ??
          "Latest news and updates from Green Store",
      },
      isPrivate: true,
      hasChildren: true,
      children: [
        {
          _id: generateId(),
          path: "/blog/:authorId/:blogId",
          Component: BlogPost,
          label: t("routes.blog_details") ?? "Blog Details",
          hidden: true,
          meta: {
            title: t("meta.blog_details.title") ?? "Blog Details",
            description:
              t("meta.blog_details.description") ??
              "Read more about this blog post",
          },
          isPrivate: true,
        },
        {
          _id: generateId(),
          path: "/blog/create",
          Component: CreateBlog,
          label: t("routes.create_blog") ?? "Create Blog",
          hidden: true,
          meta: {
            title: t("meta.create_blog.title") ?? "Create Blog",
            description: t("meta.create_blog.description") ?? "Create a new blog post",
          },
          isPrivate: true,
        },
        {
          _id: generateId(),
          path: "/blog/edit/:blogId",
          Component: EditBlog,
          label: t("routes.edit_blog") ?? "Edit Blog",
          hidden: true,
          meta: {
            title: t("meta.edit_blog.title") ?? "Edit Blog",
            description: t("meta.edit_blog.description") ?? "Edit your blog post",
          },
          isPrivate: true,
        }
      ]
    },
    {
      _id: generateId(),
      path: "/product/:category/:productId",
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
      path: "/shopping-cart",
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
      path: "/checkout",
      Component: Checkout,
      label: t("routes.checkout") ?? "Checkout",
      hidden: true,
      meta: {
        title: t("meta.checkout.title") ?? "Checkout",
        description: t("meta.checkout.description") ?? "Checkout",
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
      isPrivate: true,
    },
    
  ];

  return { appRoutes, dashboardRoutes };
};

export default useAppRoutes;
