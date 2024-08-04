import { Carousel } from "antd";
import { FC } from "react";
import Slide from "./slide";
import { MockData } from "@utils/index";
import Container from "@layout/container";

const Intro: FC = () => {
  const { hero_carousel_mock } = MockData();

  return (
    <section id='intro'>
      <Container>
        <div className='bg-[#f5f5f5] px-[15px] py-[25px] sm:p-[30px] md:p-[40px] mt-3'>
          <Carousel>
            {hero_carousel_mock.map((item) => (
              <Slide key={item?.id} {...item} />
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
