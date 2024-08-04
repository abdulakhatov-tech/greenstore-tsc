import { Tooltip as Tooltips } from "antd";
import { TooltipPropsT } from "./types";

const Tooltip: React.FC<TooltipPropsT> = ({ children, title, ...props }) => {
  return (
    <Tooltips title={title} {...props}>
      {children}
    </Tooltips>
  );
};

export default Tooltip;
