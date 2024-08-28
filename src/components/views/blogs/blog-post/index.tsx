import Container from "@layout/container";
import { Content, Header } from "./customs";
import InteractionInfo from "./customs/interaction-info";
import HeaderRouting from "../header";

const BlogPostComponent:React.FC = () => {
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
