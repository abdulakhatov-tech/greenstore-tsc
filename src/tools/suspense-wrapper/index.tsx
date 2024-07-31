import Loading from "@generic/loading";
import { FC, Suspense } from "react";

type SuspenseWrapperPropT = {
    children: React.ReactNode;
}

const SuspenseWrapper:FC<SuspenseWrapperPropT> = ({ children }) => {
   return <Suspense fallback={<Loading />}>{children}</Suspense>;
};


export default SuspenseWrapper;
