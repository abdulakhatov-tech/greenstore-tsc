import { FC } from "react";
import CustomSkeleton from "@tools/skeleton";

interface SkeletonLoaderPropsI {
    size?:'small' | 'large';
}

const SkeletonLoader:FC<SkeletonLoaderPropsI> = ({ size='large' }) => {
    switch(size) {
        case 'small':
            return <CustomSkeleton type='image' active style={{width: '80px', height: '80px'}}   />
        case 'large':
            return <CustomSkeleton type='image' active style={{width: '270px', height: '270px'}}  />
        default:
            return <CustomSkeleton type='image' active style={{width: '270px', height: '270px'}} />  // default to medium size if no size prop is provided.
    }
};

export default SkeletonLoader;
