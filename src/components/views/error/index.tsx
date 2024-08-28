import { FC } from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

import Button from "@generic/button";
import Container from "@layout/container";

const ErrorComponent: FC = () => {
  return (
    <section id='not-found'>
      <Container>
        <div className='w-full h-screen grid place-content-center'>
          <Result
            status='500'
            title='500'
            subTitle='Sorry, something went wrong.'
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

export default ErrorComponent;
