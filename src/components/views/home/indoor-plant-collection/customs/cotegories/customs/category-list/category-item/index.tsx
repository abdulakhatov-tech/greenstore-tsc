import classNames from "classnames";
import useCategoryItemFeatures from "./features";

interface CategoryItemPropsI {
  title: string;
  count: number;
  route_path: string;
}

const CategoryItem: React.FC<CategoryItemPropsI> = ({
  title,
  count,
  route_path,
}) => {
  const { selectedCategory, handleClick } = useCategoryItemFeatures();

  return (
    <li
      className={classNames(
        "flex items-center justify-between text-[15px] leading-[40px]",
        {
          ["text-green font-bold"]: selectedCategory === route_path,
          ["text-black font-normal"]: selectedCategory !== route_path,
        }
      )}
      onClick={() => handleClick({ route_path })}
    >
      <span>{title}</span>
      <span>({count})</span>
    </li>
  );
};

export default CategoryItem;
