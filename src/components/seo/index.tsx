import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import { SeoPropsT } from '@type/index';
import { defaultImage, siteUrl } from '@utils/index';

// Utility function for generating meta tags
const generateSeoTags = (
  title: string,
  description: string,
  keywords: string[],
  url: string,
  image: string
) => ({
  title,
  description,
  keywords: keywords.join(', '),
  canonical: url,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
});

const Seo: React.FC<SeoPropsT> = ({
  title = 'Greenstore | Beautiful Bouquets & Fresh Flowers',
  description = 'Discover a stunning variety of fresh flowers and unique bouquets for every occasion. Our flower shop offers beautifully crafted floral arrangements to brighten any day.',
  path = '/',
  children,
  keywords = [
    'fresh flowers',
    'flower arrangements',
    'bouquets',
    'floral gifts',
    'flower delivery',
    'custom bouquets',
    'seasonal flowers',
    'wedding flowers',
    'event flowers',
    'plant arrangements',
    'potter plants',
    'small plants',
    'house plants',
    'seeds',
    'gardening',
    'Terrariums',
    'Succulents',
    'big plants',
  ],
}) => {
  const seoUrl = `${siteUrl}${path}`;
  const seoTags = useMemo(
    () => generateSeoTags(title, description, keywords, seoUrl, defaultImage),
    [title, description, keywords, seoUrl]
  );

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{seoTags.title}</title>
        <meta name='description' content={seoTags.description} />
        <meta name='keywords' content={seoTags.keywords} />
        <link rel='canonical' href={seoTags.canonical} />
        <meta property='og:title' content={seoTags.ogTitle} />
        <meta property='og:description' content={seoTags.ogDescription} />
        <meta property='og:image' content={seoTags.ogImage} />
        <meta property='og:url' content={seoTags.ogUrl} />
        <meta name='twitter:title' content={seoTags.twitterTitle} />
        <meta name='twitter:description' content={seoTags.twitterDescription} />
        <meta name='twitter:image' content={seoTags.twitterImage} />
      </Helmet>
      {children}
    </>
  );
};

export default Seo;
