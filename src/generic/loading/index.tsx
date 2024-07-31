import { Spin } from "antd";
import { FC } from "react";

type LoadingPropT = {
    fullscreen?: boolean;
    size?: 'small' | 'default' | 'large';  // ant design spin size prop type
}

const Loading:FC<LoadingPropT> = ({ size='default', fullscreen = true }) => (
   <Spin size={size} fullscreen={fullscreen} />
);


export default Loading;
