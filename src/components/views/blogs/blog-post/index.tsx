import Container from "@layout/container";
import { Content, Header } from "./customs";
import InteractionInfo from "./customs/interaction-info";

const BlogPostComponent:React.FC = () => {
  return (
    <section id='blog-post'>
      <Container>
        <div className='py-[50px] w-full'>
          <Header />
          <Content />
          <InteractionInfo />
        </div>
      </Container>
    </section>
  );
};

export default BlogPostComponent;
