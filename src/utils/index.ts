import { HeroCarouselSlideT, SortCategoryBy } from "@type/index";
import { useTranslation } from "react-i18next";
import {
  CiUser,
  CiLocationOn,
  CiHeart,
  CiShoppingBasket,
} from "react-icons/ci";

export const UPLOAD_URL = "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"

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

 const footer_navigation = {
  title_1: t("footer_navigation.title_1"),
  title_2: t("footer_navigation.title_2"),
  title_3: t("footer_navigation.title_3"),
  title_4: t("footer_navigation.title_4"),
  navigation: [
     {
        _id: "1",
        title: t("footer_navigation.navigation.my_account"),
        path: "my-account",
     },
     {
        _id: "2",
        title: t("footer_navigation.navigation.address"),
        path: "address",
     },
     {
        _id: "3",
        title: t("footer_navigation.navigation.wishlist"),
        path: "wishlist",
     },
  ],
  categories: [
     {
        _id: "1",
        title: t("footer_navigation.categories.house_plants"),
        path: "/shop?category=house-plants",
     },
     {
        _id: "2",
        title: t("footer_navigation.categories.potter_plants"),
        path: "/shop?category=potter-plants",
     },
     {
        _id: "3",
        title: t("footer_navigation.categories.seeds"),
        path: "/shop?category=seeds",
     },
     {
        _id: "4",
        title: t("footer_navigation.categories.small_plants"),
        path: "/shop?category=small-plants",
     },
     {
        _id: "5",
        title: t("footer_navigation.categories.accessories"),
        path: "/shop?category=accessories",
     },
  ],
  plant_fetures: [
     {
        _id: "1",
        title: t("footer_navigation.plant_features.garden_care"),
        description: t(
           "footer_navigation.plant_features.garden_care_description",
        ),
        img_url:
           "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c",
     },
     {
        _id: "2",
        title: t("footer_navigation.plant_features.plant_renovation"),
        description: t(
           "footer_navigation.plant_features.plant_renovation_description",
        ),
        img_url:
           "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a",
     },
     {
        _id: "3",
        title: t("footer_navigation.plant_features.watering_garden"),
        description: t(
           "footer_navigation.plant_features.watering_garden_description",
        ),
        img_url:
           "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c",
     },
  ],
  social_media_links: [
     {
        _id: "1",
        title: "facebook",
        href: "https://www.facebook.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49",
     },
     {
        _id: "2",
        title: "instagram",
        href: "https://www.instagram.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5",
     },
     {
        _id: "3",
        title: "twitter",
        href: "https://www.twitter.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835",
     },
     {
        _id: "4",
        title: "youtube",
        href: "https://www.youtube.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f",
     },
  ],
  payment_links: [
     {
        _id: "1",
        title: "paypal",
        href: "https://www.paypal.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca",
     },
     {
        _id: "2",
        title: "mastercard",
        href: "https://www.mastercard.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a",
     },
     {
        _id: "3",
        title: "visa",
        href: "https://www.visa.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2",
     },
     {
        _id: "4",
        title: "american-express",
        href: "https://www.americanexpress.com",
        path: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=89c19c4a-9c33-4e7a-b802-a7f0ba10ef04",
     },
  ],
  contact_info: {
     logo: {
        src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa",
        path: "/",
        alt: "greenshop",
     },
     location: {
        src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flocation.svg?alt=media&amp;token=d600d0e4-aa9d-423d-8348-e3df90b195f3",
        path: "#",
        alt: "address",
        address: "70 West Buckingham Ave. Farmingdale, NY 11735",
     },
     email: {
        src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Femail.svg?alt=media&token=8136c940-c139-486f-a6d3-be49bede2381",
        path: "#",
        alt: "email",
        email: "islomabdulakhatov@gmail.com",
     },
     phone: {
        src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcall.svg?alt=media&token=3841a4f9-b499-4e8c-98d3-a05fe4edc39f",
        path: "#",
        alt: "tel",
        phoneNumber: "+99899 528 98 96",
     },
  },
};

  return {
    langData,
    sortByOptions,
    footer_navigation,
    hero_carousel_mock,
    profile_navigation,
    plant_gallery_navigation,
  };
};
