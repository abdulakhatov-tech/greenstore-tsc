import { FC } from 'react'

import { PlantFeatureProps } from './types'
import { Image } from '@generic/index'
import Typography from '@generic/typography'

const PlantFeature:FC<PlantFeatureProps> = ({title, description, img_url}) => {
  return (
    <div className='flex flex-col items-center md:items-start gap-3'>
        <div className='h-[140px] w-full flex items-center justify-center overflow-hidden py-4'>
            <Image src={img_url} alt={title} className='h-full object-cover' />
        </div>
        <Typography size='h4' className='font-bold text-black h-[26px] overflow-hidden text-center sm:text-start'>{title}</Typography>
        <Typography size='p' className='font-normal h-[75px] overflow-hidden text-center sm:text-start '>{description}</Typography>
    </div>
  )
}


export default PlantFeature