import { FC } from 'react'

import { PlantFeatureProps } from './types'
import FooterTitle from '@components/footer/customs/title'
import { Image } from '@generic/index'

const PlantFeature:FC<PlantFeatureProps> = ({title, description, img_url}) => {
  return (
    <div className='flex flex-col items-center sm:items-start gap-3'>
        <div className='h-[140px] w-full flex items-center justify-center overflow-hidden py-4'>
            <Image src={img_url} alt={title} className='h-full object-cover' />
        </div>
        <FooterTitle className='font-bold text-[18px] text-black h-[26px] overflow-hidden text-center sm:text-start'>{title}</FooterTitle>
        <p className='font-normal text-base text-gray h-[75px] overflow-hidden text-center sm:text-start '>{description}</p>
    </div>
  )
}


export default PlantFeature