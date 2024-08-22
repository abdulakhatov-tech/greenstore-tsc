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
        <title>{post?.title  || 'GreenStore - Blog Post'}</title>
        <meta property='og:title' content={post?.title || 'GreenStore - Check out this Blog Post'} />
        <meta property='og:description' content={post?.short_description || 'Discover insightful articles and updates on our blog. Stay informed and inspired with GreenStore.'} />
        <meta property='og:image' content={author?.profile_photo || `${VITE_BASE_URL}/default-image.jpg`} />
        <meta property='og:url' content={`${VITE_BASE_URL}/blog/${post?.created_by}/${post?._id}`} />
        <meta property="og:type" content="article" />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post?.title || 'GreenStore - Blog Post'} />
        <meta name='twitter:description' content={post?.short_description || 'Discover insightful articles and updates on our blog. Stay informed and inspired with GreenStore.'} />
        <meta name='twitter:image' content={author?.profile_photo || `${VITE_BASE_URL}/default-image.jpg`} />
      </Helmet>

      <BlogPostComponent />
    </>
  );
};

export default BlogPost;
