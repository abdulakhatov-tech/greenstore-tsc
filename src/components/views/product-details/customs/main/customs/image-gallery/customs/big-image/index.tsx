import { Image } from "antd";
import { FC } from "react";

import SkeletonLoader from "../skeleton-loader";
import { BigImagePropsI } from "./types";

const BigImage:FC<BigImagePropsI> = ({ loading, activeImage, title }) =>
   !loading ? (
      <div className='flex-1 flex items-center justify-center overflow-hidden relative max-h-[400px] min-h-[250px] bg-bgGray'>
         <Image
            preview
            src={activeImage}
            alt={`${title}`}
            loading="lazy"
            className='h-full object-cover'
         />
      </div>
   ) : (
      <div className='w-full h-full flex items-center justify-center'>
         <SkeletonLoader size="large" />
      </div>
   );

export default BigImage;
