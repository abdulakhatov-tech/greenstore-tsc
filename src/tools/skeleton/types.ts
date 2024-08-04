import { SkeletonProps } from "antd";

export interface CustomSkeletonI extends SkeletonProps {
    type?: 'input' | 'paragraph' | 'image' | 'default';
    block?: boolean
}