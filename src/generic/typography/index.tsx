import { FC } from "react";

type TitlePropsT = {
  children: React.ReactNode; 
  className?: string;
  size: keyof SizesT; 
  onClick?: () => void; 
}

type SizesT = {
  'h1': string;
  'h2': string;
  'h3': string;
  'h4': string;
  'h5': string;
  'h6': string;
  'p': string;
}



const Typography:FC<TitlePropsT> = ({children, className, size='h1', onClick}) => {


  const sizes:SizesT = {
    'h1': 'text-[35px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[65px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px]',
    'h2': '',
    'h3': '',
    'h4': `text-[16px] lg:text-[18px] leading-4`,
    'h5': `text-[14px] md:text-[16px]`,
    'h6': '',
    'p': 'text-[14px] leading-6 font-normal text-gray' 
  }

  const textStyle = 'text-black leading-4';


  switch(size) {
    case 'h1': 
      return <h1 className={`${textStyle} ${sizes[size]} ${className}`} onClick={onClick}>{children}</h1>;
    case 'h2':
      return <h2 className={`${textStyle} ${sizes[size]} ${className}`} onClick={onClick}>{children}</h2>;
    case 'h3':
      return <h3 className={`${textStyle} ${sizes[size]} ${className}`} onClick={onClick}>{children}</h3>;
    case 'h4':
      return <h4 className={`${textStyle} ${sizes[size]} ${className}`} onClick={onClick}>{children}</h4>;
    case 'h5':
      return <h5 className={`${textStyle} ${sizes[size]} ${className}`} onClick={onClick}>{children}</h5>;
    case 'h6':
      return <h6 className={`${textStyle} ${sizes[size]} ${className}`} onClick={onClick}>{children}</h6>;
    case 'p': 
      return <p className={`${sizes[size]} ${className}`} onClick={onClick}>{children}</p>;
    default:
      return <h1 className={`${textStyle} ${sizes[size]} ${className}`} onClick={onClick}>{children}</h1>;
  }

};

export default Typography;
