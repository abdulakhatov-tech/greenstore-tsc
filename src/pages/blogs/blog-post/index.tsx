import { Helmet } from "react-helmet-async";
import BlogPostComponent from "@components/views/blogs/blog-post";
import useBlogsServices from "@services/blogs";
import useUsersService from "@services/users";

const BlogPost = () => {
  const { blogById } = useBlogsServices();
  const { user } = useUsersService();

  const { data: post } = blogById;
  const { data: author } = user

  const  VITE_BASE_URL = import.meta.env.VITE_BASE_URL

  return (
    <>
      <Helmet>
        <title>{post?.title}</title>
        <meta property='og:title' content={post?.title ?? ''} />
        <meta property='og:description' content={post?.short_description ?? ''} />
        <meta property='og:image' content={author?.profile_photo} />
        <meta property='og:url' content={`${VITE_BASE_URL}/blog/${post?.created_by}/${post?._id}`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post?.title ?? ''} />
        <meta name='twitter:description' content={post?.short_description ?? ''} />
        <meta name='twitter:image' content={author?.profile_photo} />
      </Helmet>

      <BlogPostComponent />
    </>
  );
};

export default BlogPost;
