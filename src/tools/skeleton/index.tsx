import { Skeleton } from "antd";
import SkeletonInput from "antd/lib/skeleton/Input";
import SkeletonParagraph from "antd/lib/skeleton/Paragraph";
import SkeletonImage from "antd/lib/skeleton/Image";

import { FC } from "react";

import { CustomSkeletonI } from "./types";

type SkeletonMapT = {
  input: typeof SkeletonInput;
  paragraph: typeof SkeletonParagraph;
  image: typeof SkeletonImage;
  default: typeof Skeleton;
};

const CustomSkeleton: FC<CustomSkeletonI> = ({
  type = "default",
  block=false,
  ...props
}) => {
  const skeletonMap: SkeletonMapT = {
    input: SkeletonInput,
    paragraph: SkeletonParagraph,
    image: SkeletonImage,
    default: Skeleton,
  };

  const SkeletonComponent = skeletonMap[type] || Skeleton;

  return <SkeletonComponent {...props} block={block} />;
};

export default CustomSkeleton;
