import CustomSkeleton from '@tools/skeleton';
import { FC } from 'react';

const LoadingSkeletons:FC<{count?:number}> = ({ count = 3 }) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <CustomSkeleton active key={index} />
    ))}
  </>
);

export default LoadingSkeletons;