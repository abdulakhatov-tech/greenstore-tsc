import { HeroCarouselSlideT, SortCategoryBy } from "@type/index";
import { useTranslation } from "react-i18next";
import {
  CiUser,
  CiLocationOn,
  CiHeart,
  CiShoppingBasket,
} from "react-icons/ci";

export const logo: string =
  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa";

export const MockData = () => {
  const { t } = useTranslation();

  const langData = [
    {
      key: "uz",
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTtbS4PWhReaAegvGzcJuWEul-kFzco2bZMyhNUbmyLv7DhnLaG1S5LG01521eXIC6atLJI8Cros9RbAwe0_Ok3nInRGuHpUy2EwOi3CDmdMmW2G-p_CQkwF4hyphenhyphenltrgAqoR9tt78Fz_ApF/s1600/uz.png",
      alt: "Uzbek flag",
      label: t("locale.uz"),
    },
    {
      key: "en-US",
      src: "https://i.pinimg.com/originals/df/ab/1b/dfab1babf88c4d1ebf72d3be72c36b86.jpg",
      alt: "English flag",
      label: t("locale.en"),
    },
    {
      key: "ru",
      src: "https://avatars.mds.yandex.net/i?id=ea5f252279abb018dcb938ad79f7a7a2_l-3872711-images-thumbs&n=13",
      alt: "Russian flag",
      label: t("locale.ru"),
    },
  ];

  const hero_carousel_mock: HeroCarouselSlideT[] = [
    {
      id: 0,
      title: t("home_page.hero_slice_1.title"),
      buttonText: t("home_page.hero_slice_1.buttonText"),
      subtitle: t("home_page.hero_slice_1.subtitle"),
      description: t("home_page.hero_slice_1.description"),
      flower_1:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
      flower_2:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
    },
    {
      id: 1,
      title: t("home_page.hero_slice_2.title"),
      buttonText: t("home_page.hero_slice_2.buttonText"),
      subtitle: t("home_page.hero_slice_2.subtitle"),
      description: t("home_page.hero_slice_2.description"),
      flower_1:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
      flower_2:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
    },
    {
      id: 2,
      title: t("home_page.hero_slice_3.title"),
      buttonText: t("home_page.hero_slice_3.buttonText"),
      subtitle: t("home_page.hero_slice_1.subtitle"),
      description: t("home_page.hero_slice_3.description"),
      flower_1:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
      flower_2:
        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
    },
  ];

  const profile_navigation = [
    {
      _id: "1",
      title: t("routes.account_details") ?? "Account Details",
      path: "/profile",
      Icon: CiUser,
      label: t("routes.account_details") ?? "Account Details",
    },
    {
      _id: "2",
      title: t("routes.my_products") ?? "My Products",
      path: "/profile/my-products",
      Icon: CiShoppingBasket,
      label: t("routes.my_products") ?? "My Products",
    },
    {
      _id: "3",
      title: t("routes.address") ?? "Address",
      path: "/profile/address",
      Icon: CiLocationOn,
      label: t("routes.address") ?? "My Address",
    },
    {
      _id: "4",
      title: t("routes.wishlist") ?? "Wishlist",
      path: "/profile/wishlist",
      Icon: CiHeart,
      label: t("routes.wishlist") ?? "My Wishlist",
    },
  ];

  const plant_gallery_navigation = [
    {
      _id: "1",
      title: t("home_page.indoor_plant_gallery.products.nav_item_1"),
      slug: "all-plants",
    },
    {
      _id: "2",
      title: t("home_page.indoor_plant_gallery.products.nav_item_2"),
      slug: "new-arrivals",
    },
    {
      _id: "3",
      title: t("home_page.indoor_plant_gallery.products.nav_item_3"),
      slug: "sale",
    },
  ];

  const sortByOptions = [
    {
       value: SortCategoryBy.DEFAULT_SORTING ?? "default-sorting",
       label: t("home_page.indoor_plant_gallery.products.default_sorting"),
    },
    {
       value: SortCategoryBy.THE_CHEAPEST ?? "the-cheapest",
       label: t("home_page.indoor_plant_gallery.products.the_cheapest"),
    },
    {
       value: SortCategoryBy.MOST_EXPENSIVE ?? "most-expensive",
       label: t("home_page.indoor_plant_gallery.products.most_expensive"),
    },
 ];

  return {
    langData,
    sortByOptions,
    hero_carousel_mock,
    profile_navigation,
    plant_gallery_navigation,
  };
};
