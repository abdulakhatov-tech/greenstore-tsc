import { memo } from "react";

import { Image } from "@generic/index";
import useDiscountImageService from "@services/discount-image";

const DiscountImage: React.FC = memo(() => {
  const { data } = useDiscountImageService();

  return (
    <div className='pt-5 bg-[linear-gradient(90deg,_rgba(70,163,88,0.01),_rgba(70,163,88,0.3))] overflow-hidden'>
      <div className='text-center flex flex-col justify-center gap-4 w-full mb-2'>
        <h2 className='text-[35px] font-semibold leading-[33px] px-3 text-green '>
          {data?.title}
        </h2>
        <h4 className='text-[23px] font-bold leading-[16px]'>
          UP TO {data?.discoount_up_to}% OFF
        </h4>
      </div>
      <Image
        src={data?.poster_image_url as string}
        alt={data?.title as string}
      />
    </div>
  );
});

export default DiscountImage;
