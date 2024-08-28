import Breadcrumbs from "@generic/breadcrumbs";
import { BreadcrumbRoutesI } from "@type/index";
import { useParams } from "react-router-dom";

const Header = () => {
  const { blogId, authorId } = useParams(); 
  const routes: BreadcrumbRoutesI[] = [
    {
      breadcrumbName: "Home",
      path: "/",
    },
    {
      breadcrumbName: "Blogs",
      path: "/blog",
    },
    {
      breadcrumbName: blogId && authorId ? "Blog" : blogId ? "Edit blog" : "Create blog",
      path: blogId && authorId ? `/blog/${authorId}/${blogId}` : blogId ? `/blog/edit/${blogId}` : '/blog/create',
    },
  ];

  return (
      <div className="my-4">
        <Breadcrumbs routes={routes} />
      </div>
  );
};

export default Header;
