import { FC } from "react";
import { Result } from "antd";
import Button from "@generic/button";
import Container from "@layout/container";
import { Link } from "react-router-dom";

const NotFoundComponent: FC = () => {
  return (
    <section id='not-found'>
      <Container>
        <div className="w-full h-screen grid place-content-center">
          <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={
              <div className='flex justify-center'>
                <Link to='/'>
                  <Button variant='primary'>Back Home</Button>
                </Link>
              </div>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default NotFoundComponent;
