import classNames from "classnames";
import { FC } from "react";

interface TabOptionsPropsI {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const TabOption:FC<TabOptionsPropsI> = ({ isActive, onClick, children }) => {

   return (
      <li
         className={classNames('text-[15px] sm:text-[17px]  border-b-[2px] border-transparent', {
            ['text-green border-b-[2px] border-b-green font-semibold']: isActive,
            ['text-black font-normal']:!isActive,
         })}
         onClick={onClick}
      >
         {children}
      </li>
   );
};

export default TabOption;
