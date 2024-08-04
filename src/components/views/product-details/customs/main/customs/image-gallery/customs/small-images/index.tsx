import classNames from "classnames";
import { FC } from "react";

import { SmallImagesPropsI } from "./types";
import SkeletonLoader from "../skeleton-loader";
import { Image } from "@generic/index";

const SmallImages: FC<SmallImagesPropsI> = ({
  loading,
  detailed_images,
  setActiveImage,
  activeImage,
}) => {
  return (
    <div className='w-[100%] lg:w-[100px] flex items-center justify-center overflow-hidden lg:min-h-[400px]'>
      <ul className='max-h-[400px] overflow-hidden flex flex-row lg:flex-col items-center justify-center gap-1'>
        {!loading
          ? detailed_images?.map((src: string, index: number) => (
              <li
                key={index}
                className={classNames(
                  "max-w-[90px] max-h-[90px] border-2 overflow-hidden flex items-center justify-center",
                  {
                    ["border-green"]: index === activeImage,
                    ['border-transparent']: index !== activeImage
                  }
                )}
              >
                <Image
                  src={src}
                  alt={"image"}
                  loading='lazy'
                  onClick={() => setActiveImage(index)}
                  className='w-[90px] h-[90px] object-cover'
                />
              </li>
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <SkeletonLoader key={index} size='small' />
            ))}
      </ul>
    </div>
  );
};

export default SmallImages;
