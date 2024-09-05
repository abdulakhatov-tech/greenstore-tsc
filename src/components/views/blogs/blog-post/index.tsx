import Container from "@layout/container";
import { Content, Header } from "./customs";
import InteractionInfo from "./customs/interaction-info";
import HeaderRouting from "../header";
import { useEffect } from "react";
import useBlogsServices from "@services/blogs";

const BlogPostComponent:React.FC = () => {
  const { viewBlogById } = useBlogsServices();

  useEffect(() => {
    viewBlogById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id='blog-post'>
      <Container>
        <div className='py-[50px] w-full'>
          <HeaderRouting />
          <Header />
          <Content />
          <InteractionInfo />
        </div>
      </Container>
    </section>
  );
};

export default BlogPostComponent;
