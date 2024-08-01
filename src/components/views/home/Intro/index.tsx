import { MockData } from "@utils/index";
import { Carousel } from "antd";
import { FC } from "react";
import Slide from "./slide";

const Intro: FC = () => {
  const { hero_carousel_mock } = MockData();

  return (
    <section id='intro'>
      <div className='container'>
        <div className='bg-[#f5f5f5] px-[15px] py-[25px] sm:p-[30px] md:p-[40px] mt-3'>
          <Carousel>
            {hero_carousel_mock.map((item) => (
              <Slide key={item?.id} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Intro;
