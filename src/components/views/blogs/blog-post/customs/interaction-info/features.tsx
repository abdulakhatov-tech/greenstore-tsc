import { useTranslation } from 'react-i18next';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share';
import useBlogsServices from '@services/blogs';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const useInteractionsInfoFeatures = () => {
  const { t } = useTranslation();
  const { blogById } = useBlogsServices();
  const { data: post } = blogById;

  const SOCIAL_MEDIA_URL = post
    ? encodeURI(`${VITE_BASE_URL}/blog/${post.created_by}/${post._id}`)
    : VITE_BASE_URL;

  const IMAGE_URL = post?.image_url || `${VITE_BASE_URL}/default-image.jpg`; // Replace with your image logic

  const socialPlatforms = [
    { key: '1', Component: TelegramShareButton, Icon: TelegramIcon, labelKey: 'telegram', supportsImage: true },
    { key: '2', Component: LinkedinShareButton, Icon: LinkedinIcon, labelKey: 'linkedin', supportsImage: true },
    { key: '3', Component: EmailShareButton, Icon: EmailIcon, labelKey: 'email' },
    { key: '4', Component: WhatsappShareButton, Icon: WhatsappIcon, labelKey: 'whatsapp', supportsImage: true },
    { key: '5', Component: TwitterShareButton, Icon: TwitterIcon, labelKey: 'twitter', supportsImage: true },
    { key: '6', Component: FacebookShareButton, Icon: FacebookIcon, labelKey: 'facebook', supportsImage: true },
  ];

  const items = socialPlatforms.map(({ key, Component, Icon, labelKey, supportsImage }) => ({
    key,
    label: (
      <Component 
        url={SOCIAL_MEDIA_URL} 
        title={post?.title || ''} 
        className="flex items-center gap-2"
        {...(supportsImage && { image: IMAGE_URL })} // Conditionally add image prop
      >
        <Icon size={20} round />
        <span className="text-[14px] font-semibold text-black italic">
          {t(`blog.${labelKey}`)}
        </span>
      </Component>
    ),
  }));

  return { items };
};

export default useInteractionsInfoFeatures;
